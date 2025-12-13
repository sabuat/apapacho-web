import fs from 'fs';
import path from 'path';

// Definimos la ruta: carpeta actual/data/posts
const postsDirectory = path.join(process.cwd(), 'data/posts');

export function getAllPosts() {
  // 1. Obtener los nombres de los archivos en data/posts
  const fileNames = fs.readdirSync(postsDirectory);

  // 2. Mapear cada archivo para obtener sus datos
  const allPostsData = fileNames.map(fileName => {
    // Importar el contenido del archivo
    const fileContent = require(`../data/posts/${fileName}`);
    return fileContent.default;
  });

  // 3. (Opcional) Ordenar por fecha si quisieras
  return allPostsData;
}

export function getPostBySlug(slug) {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug);
}