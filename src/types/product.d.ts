export type Pantalones =  {
  data: Pantalon[];
}

export type Camisetas = {
  data: Camiseta[]
}

export type Zapatos = {
  data: Zapato[]
}

type Camiseta = {
  shirtName: string,
  shirtDescription: string
  shirtPrice: string
  shirtImage: string,
}

type Pantalon = {
  trouserName:        string;
  trouserDescription: string;
  trouserPrice:       number;
  trouserImage:       string;
}

type Zapato = {
  shoesName: string,
  shoesDescription: string
  shoesPrice: string,
  shoesImage: string,
}