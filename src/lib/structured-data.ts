import type { Thing, WithContext } from "schema-dts";

export function serializeStructuredData<T extends Thing>(
  data: WithContext<T>,
) {
  return JSON.stringify(data);
}

export function jsonLdScript<T extends Thing>(data: WithContext<T>) {
  return {
    __html: serializeStructuredData(data),
  };
}
