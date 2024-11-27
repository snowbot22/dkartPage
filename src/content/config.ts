// 1. Importa las utilidades de `astro:content`
import { z,defineCollection } from 'astro:content';
import { string } from 'astro:schema';
// 2. Define tu colección(es)
const pageCollection = defineCollection({ 
  type: "content",
  schema: z.object({ 
    titulo: z.string(),
    image: z.string(),
    tag: z.string(),
    desc: z.string()
  }),

 });
// 3. Exporta un único objeto `collections` para registrar tu(s) colección(es)
//    Esta clave debe coincidir con el nombre de tu directorio de colección en "src/content"
export const collections = {
  products: pageCollection,
  accesorios: pageCollection,
  equipos: pageCollection
};