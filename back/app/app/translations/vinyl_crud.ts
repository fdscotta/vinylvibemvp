  export const fields = {
    es: {
      title: {
        name: "Titulo",
        placeholder: "Ingrese un Titulo"
      },
      standardConditions: {
        name: "Condicion del Producto"
      },
      standardConditionsOptions: [
          { name: "M", slug: "m", tooltip: "Como nuevo", description: "Impecable, sin defectos como el día en que se compró." },
          { name: "NM", slug: "nm", tooltip: "Casi como nuevo", description: "Excepcionalmente limpio, solo los más leves signos de desgaste" },
          { name: "VG+", slug: "vg+", tooltip: "Muy Bueno Plus", description: "El disco ha sido reproducido, pero no hay arañazos ni marcas visibles en la superficie de reproducción." },
          { name: "VG", slug: "vg", tooltip: "Muy Bueno", description: "El disco ha sido usado y puede mostrar signos leves de desgaste, pero nada que afecte la reproducción." },
          { name: "G+", slug: "g+", tooltip: "Bueno Plus", description: "Similar a Muy Bueno, pero con un desgaste más visible en el disco. Estos discos seguirán reproduciéndose completamente sin saltos." },
          { name: "G", slug: "g", tooltip: "Bueno", description: "El disco presenta desgaste notable y arañazos visibles en la superficie de reproducción, pero se reproduce sin saltos." },
          { name: "F", slug: "f", tooltip: "Regular", description: "El disco muestra arañazos y marcas dramáticas en la superficie de reproducción que pueden afectar la reproducción." },
          { name: "P", slug: "p", tooltip: "Pobre", description: "El disco muestra arañazos y marcas dramáticas en la superficie de reproducción que pueden afectar la reproducción." }
      ],
      standardConditionsPackages: {
        name: "Condicion de la Funda"
      },
      standardConditionsPackagesOptions: [
          { name: "M", slug: "m", tooltip: "Como nuevo", description: "Impecable, sin defectos como el día en que se compró." },
          { name: "NM", slug: "nm", tooltip: "Casi como nuevo", description: "Excepcionalmente limpio, solo los más leves signos de desgaste." },
          { name: "VG+", slug: "vg+", tooltip: "Muy Bueno Plus", description: "Marcas más visibles que Casi como nuevo." },
          { name: "VG", slug: "vg", tooltip: "Muy Bueno", description: "Aparentes marcas de doblez y plegado." },
          { name: "G+", slug: "g+", tooltip: "Bueno Plus", description: "Marcas más visibles que Muy Bueno." },
          { name: "G", slug: "g", tooltip: "Bueno", description: "Desgastado con marcas, dobleces, pliegues o lágrimas evidentes." },
          { name: "F", slug: "f", tooltip: "Regular", description: "Desgaste/marcas pesadas, pliegues/rasgaduras significativos." },
          { name: "P", slug: "p", tooltip: "Pobre", description: "Moho, decoloración, lágrimas severas. Desmoronándose." },
          { name: "X", slug: "x", tooltip: "Genérico", description: "Embalaje genérico estándar." },
          { name: "NC", slug: "nc", tooltip: "Sin Cubierta", description: "Solo cinta sin embalaje." }
      ],
      price: {
        name: "Precio",
        placeholder: "Ingrese in Precio mayor a $0"
      },
      photo: {
        name: "Foto",
        placeholder: "Cargar Foto"
      },
      description: {
        name: "Descripcion",
        placeholder: "Ingrese una descripcion"
      },
      address: {
        name: "Direccion",
        placeholder: "Ingrese una Direccion"
      },
      sku: {
        name: "SKU",
        placeholder: "Ingrese un SKU"
      }
    },
    en: {
      title: {
        name: "Title",
        placeholder: "Enter the Title"
      },
      standardConditions: {
        name: "Set the Media Condition"
      },
      standardConditions: [
        { name: "M", slug: "m", tooltip: "Mint", description: "Pristine, as flawless as the day it was purchased." },
        { name: "NM", slug: "nm", tooltip: "Near Mint", description: "Exceptionally clean, only the slightest of marks" },
        { name: "VG+", slug: "vg+", tooltip: "Very Good Plus", description: "The disc has been played, but there are no visible scratches or markings on the playing surface." },
        { name: "VG", slug: "vg", tooltip: "Very Good", description: "The disc has been used and may show light signs of wear, but nothing that impacts playback." },
        { name: "G+", slug: "g+", tooltip: "Good Plus", description: "Similar to Very Good, but with more visible wear on the disc. These discs will still play all the way through without any skips." },
        { name: "G", slug: "g", tooltip: "Good", description: "The disc exhibits noticeable wear and with visible scratches on the playing surface, but plays without skipping." },
        { name: "F", slug: "f", tooltip: "Fair", description: "The disc shows dramatic scratches and marks on playing surface that may impact playback" },
        { name: "P", slug: "p", tooltip: "Poor", description: "The disc shows dramatic scratches and marks on playing surface that may impact playback" }
      ],
      standardConditionsPackages: {
        name: "Set the Package Condition"
      },
      standardConditionsPackages: [
        { name: "M", slug: "m", tooltip: "Mint", description: "Pristine, as flawless as the day it was purchased." },
        { name: "NM", slug: "nm", tooltip: "Near Mint", description: "Exceptionally clean, only the slightest of marks." },
        { name: "VG+", slug: "vg+", tooltip: "Very Good Plus", description: "More noticeable marks than Near Mint." },
        { name: "VG", slug: "vg", tooltip: "Very Good", description: "Creasing and folding apparent." },
        { name: "G+", slug: "g+", tooltip: "Good Plus", description: "More noticeable marks than Very Good." },
        { name: "G", slug: "g", tooltip: "Good", description: "Worn with obvious marks, folds, creases, or tears." },
        { name: "F", slug: "f", tooltip: "Fair", description: "Heavy wear/markings, significant creases/tears" },
        { name: "P", slug: "p", tooltip: "Poor", description: "Mold, fading, severe tears. Falling apart." },
        { name: "X", slug: "x", tooltip: "Generic", description: "Standard blank packaging." },
        { name: "NC", slug: "nc", tooltip: "No Cover", description: "Tape only with no packaging." }
      ],
      price: {
        name: "Price",
        placeholder: "Enter a Price Mayor than $0"
      },
      photo: {
        name: "Photo",
        placeholder: "Enter the Photo"
      },
      description: {
        name: "Description",
        placeholder: "Enter a Description"
      },
      address: {
        name: "Address",
        placeholder: "Enter an Address"
      },
      sku: {
        name: "SKU",
        placeholder: "Enter a SKU"
      }
    }
  };