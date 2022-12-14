


export interface Crypto{
    id:                           string;
    symbol:                       string;
    name:                         string;
    image:                        string;
    current_price:                 number;
    marketCap:                    number;
    marketCapRank:                number;
    fullyDilutedValuation:        number;
    totalVolume:                  number;
    high24H:                      number;
    low24H:                       number;
    priceChange24H:               number;
    priceChangePercentage24H:     number;
    marketCapChange24H:           number;
    marketCapChangePercentage24H: number;
    circulatingSupply:            number;
    totalSupply:                  number;
    maxSupply:                    number;
    ath:                          number;
    athChangePercentage:          number;
    athDate:                      Date;
    atl:                          number;
    atlChangePercentage:          number;
    atlDate:                      Date;
    roi:                          null;
    lastUpdated:                  Date;
}