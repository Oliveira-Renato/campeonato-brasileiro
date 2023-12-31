export interface IPartidas {
  partidas: [
    {
      visitante: string;
      resultado: string;
      data_partida: string;
      pontuacao_geral_mandante: {
        gols_fora_casa: number;
        empates_fora_casa: number;
        total_jogos: number;
        gols_casa: number;
        jogos_fora_casa: number;
        vitorias_casa: number;
        derrotas_casa: number;
        total_pontos: number;
        empates_casa: number;
        pontos_fora_casa: number;
        total_gols_sofridos: number;
        total_vitorias: number;
        vitorias_fora_casa: number;
        total_derrotas: number;
        pontos_casa: number;
        derrotas_fora_casa: number;
        total_gols_marcados: number;
        jogos_casa: number;
        total_empates: number
      };
      placar_visitante: number;
      hora_partida: string;
      mandante: string;
      placar_mandante: number;
      estadio: string;
      pontuacao_geral_visitante: {
        gols_fora_casa: number;
        empates_fora_casa: number;
        total_jogos: number;
        gols_casa: number;
        jogos_fora_casa: number;
        vitorias_casa: number;
        derrotas_casa: number;
        total_pontos: number;
        empates_casa: number;
        pontos_fora_casa: number;
        total_gols_sofridos: number;
        total_vitorias: number;
        vitorias_fora_casa: number;
        total_derrotas: number;
        pontos_casa: number;
        derrotas_fora_casa: number;
        total_gols_marcados: number;
        jogos_casa: number;
        total_empates: number;
      };
    }
  ],
  numero: number
}

export interface IAnos {
  [key: number]: IPartidas[]
}

export interface ITimesEstatiscas {
  pontos: number;
  vitorias: number;
  derrotas: number;
  empates: number;
  gols_pro: number;
  gols_contra: number;
  saldo: number;
}
