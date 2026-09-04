export type SchemaPrimitive = string | number | boolean | null;

export type SchemaValue =
  | SchemaPrimitive
  | SchemaObject
  | SchemaValue[];

export interface SchemaObject {
  "@context"?: "https://schema.org";
  "@type"?: string | string[];
  "@id"?: string;
  [key: string]: SchemaValue | undefined;
}

interface SchemaProps {
  data: SchemaObject | SchemaObject[];
  id?: string;
}

/**
 * Safely serializes JSON-LD for use inside an HTML script element.
 *
 * Escaping "<" prevents serialized content from prematurely
 * closing the script element.
 */
function serializeSchema(
  data: SchemaObject | SchemaObject[]
): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Removes the individual @context property when schemas are
 * rendered together inside an @graph.
 */
function removeContext(
  schema: SchemaObject
): SchemaObject {
  const schemaWithoutContext = { ...schema };

  delete schemaWithoutContext["@context"];

  return schemaWithoutContext;
}

/**
 * Reusable JSON-LD component for Next.js App Router pages
 * and layouts.
 *
 * This remains a Server Component. Do not add "use client".
 */
export default function Schema({
  data,
  id = "structured-data",
}: SchemaProps) {
  const structuredData: SchemaObject = Array.isArray(data)
    ? {
        "@context": "https://schema.org",
        "@graph": data.map(removeContext),
      }
    : data;

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeSchema(structuredData),
      }}
    />
  );
}