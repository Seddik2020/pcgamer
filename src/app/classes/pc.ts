export class PC {
      constructor(
            public ref: string,
            public marque: string,
            public processeur: string,
            public ram: string,
            public carte_graphique: string,
            public disque_dur: string,
            public imageUrl: string,
            public prix: number) {
                  this.ref= ref;
                  this.marque = marque;
                  this.processeur = processeur;
                  this.ram = ram;
                  this.carte_graphique = carte_graphique;
                   this.disque_dur = disque_dur;
                  this.imageUrl = imageUrl;
                  this.prix = prix;
   
            }
      
}
