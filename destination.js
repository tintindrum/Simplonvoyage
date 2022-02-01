var destination_id = window.location.href;
destination_id = destination_id.slice(-1)

if (destination_id == "l"){destination_id = "0"}

class obj_destination{
    constructor(destination_name, destination_description, destination_photos){
        this.destination_name = destination_name
        this.destination_description = destination_description
        this.destination_photos = destination_photos
        this.pointsforts = this.pointsforts
    }
}

destination_france = {
    destination_name: "France",
    destination_description: "La France est un super pays !",
    destination_photos: ["img/france/france1.png","img/france/france2.png","img/france/france3.png","img/france/france4.png"],
    pointsforts: ["bonjour ça va","oui"]
}

destination_italie = {
    destination_name: "Italie",
    destination_description: "L'Italie, on mange des pâtes",
    destination_photos: ["img/italie/italie1.png", "img/italie/italie2.png", "img/italie/italie3.png", "img/italie/italie4.png"],
    pointsforts: ["bonjour ça va","un peu", "beaucoup", "passionément"]
}

destination_espagne = {
    destination_name: "Espagne",
    destination_description: "Hablo español ?",
    destination_photos: ["img/espagne/espagne1.png", "img/espagne/espagne2.png", "img/espagne/espagne3.png","img/espagne/espagne4.png"],
    pointsforts: ["hello world","bissmilah", "je rentre chez moi", "bonsoir", "bonsoir"]

}

destination_paysbas = {
    destination_name: "Pays-Bas",
    destination_description: "Les Pays-Bas (en néerlandais : Nederland), en forme longue le royaume des Pays-Bas (Koninkrijk der Nederlanden), sont un pays transcontinental dont le territoire métropolitain est situé en Europe.",
    destination_photos: ["img/paysbas/paysbas1.png", "img/paysbas/paysbas2.png", "img/paysbas/paysbas3.png", "img/paysbas/paysbas4.png"],
    pointsforts: ["mhhhhhhh","ah"]
}

destination_allemagne = {
    destination_name: "Allemagne",
    destination_description: "L'Allemagne (/almaɲ/ ; en allemand : Deutschland",
    destination_photos: ["img/allemagne/allemagne1.png", "img/allemagne/allemagne2.png", "img/allemagne/allemagne3.png", "img/allemagne/allemagne4.png"],
    pointsforts: ["mhhhhhhh","ah"]
}
