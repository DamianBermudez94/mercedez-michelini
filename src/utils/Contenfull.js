import { createClient } from "contentful";

const client = createClient({
  space: "ip7fn0dyxbho",
  accessToken: "eapv_7lhVyKtpg4h20F_M2I18cwncppaG1g1hfeSsjo",
});

export async function getProperties() {
  const response = await client.getEntries();
  console.log("soy la data que viene de contenfull",response);
  
  return response.items.map((item) => ({
    titulo: item.fields.titulo,
    descripcion: item.fields.descripcion,
    imagen: item.fields.galeriaDeImagenes
          ? item.fields.galeriaDeImagenes.map((img) => img.fields.file.url)
          : [],
  }));
}
