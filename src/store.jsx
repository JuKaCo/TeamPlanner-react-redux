import { createStore } from "redux";

const initialState = {
    players: [
        {
          "player_id": 5627,
          "position_id": 1,
          "number": 31,
          "captain": 0,
          "injured": false,
          "minutes": 120,
          "appearences": 2,
          "lineups": 1,
          "substitute_in": 1,
          "substitute_out": null,
          "substitutes_on_bench": 8,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": 4,
          "inside_box_saves": 4,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 0,
          "rating": "6.32",
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": 42,
            "accuracy": 76,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 5627,
              "team_id": 939,
              "country_id": 320,
              "position_id": 1,
              "common_name": "M. Andersen",
              "display_name": "Mikkel Andersen",
              "fullname": "Mikkel Andersen",
              "firstname": "Mikkel",
              "lastname": "Andersen",
              "nationality": "Denmark",
              "birthdate": "17/12/1988",
              "birthcountry": "Denmark",
              "birthplace": "Herlev",
              "height": "196 cm",
              "weight": "91 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/27/5627.png"
            }
          }
        },
        {
          "player_id": 82808,
          "position_id": 1,
          "number": 1,
          "captain": 0,
          "injured": false,
          "minutes": 1320,
          "appearences": 15,
          "lineups": 15,
          "substitute_in": null,
          "substitute_out": 1,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": 31,
          "inside_box_saves": 22,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": 1,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 6,
          "rating": "6.97",
          "fouls": {
            "committed": null,
            "drawn": 3
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": 1,
            "success": 1,
            "dribbled_past": null
          },
          "duels": {
            "total": 14,
            "won": 12
          },
          "passes": {
            "total": 526,
            "accuracy": 68,
            "key_passes": 1
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 82808,
              "team_id": 939,
              "country_id": 320,
              "position_id": 1,
              "common_name": "J. Hansen",
              "display_name": "Jesper Hansen",
              "fullname": "Jesper Hansen",
              "firstname": "Jesper",
              "lastname": "Hansen",
              "nationality": "Denmark",
              "birthdate": "31/03/1985",
              "birthcountry": "Denmark",
              "birthplace": "Slangerup",
              "height": "188 cm",
              "weight": "78 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/24/82808.png"
            }
          }
        },
        {
          "player_id": 537110,
          "position_id": 1,
          "number": 30,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": 5,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 537110,
              "team_id": 939,
              "country_id": 320,
              "position_id": 1,
              "common_name": "O. Ottesen",
              "display_name": "Oliver Ottesen",
              "fullname": "Oliver Ottesen",
              "firstname": "Oliver",
              "lastname": "Ottesen",
              "nationality": "Denmark",
              "birthdate": "22/08/1998",
              "birthcountry": "Denmark",
              "birthplace": "Roskilde",
              "height": "183 cm",
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/22/537110.png"
            }
          }
        },
        {
          "player_id": 191065,
          "position_id": 2,
          "number": null,
          "captain": 0,
          "injured": false,
          "minutes": 241,
          "appearences": 3,
          "lineups": 3,
          "substitute_in": null,
          "substitute_out": 1,
          "substitutes_on_bench": 7,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 2,
          "interceptions": 4,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": 9,
          "blocks": 3,
          "hit_post": null,
          "cleansheets": 1,
          "rating": "7.22",
          "fouls": {
            "committed": 1,
            "drawn": 5
          },
          "crosses": {
            "total": 8,
            "accurate": null
          },
          "dribbles": {
            "attempts": 1,
            "success": 1,
            "dribbled_past": 1
          },
          "duels": {
            "total": 22,
            "won": 16
          },
          "passes": {
            "total": 147,
            "accuracy": 76,
            "key_passes": 2
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 191065,
              "team_id": 939,
              "country_id": 47,
              "position_id": 2,
              "common_name": "J. Andersson",
              "display_name": "Joel Andersson",
              "fullname": "Joel Andersson",
              "firstname": "Joel",
              "lastname": "Andersson",
              "nationality": "Sweden",
              "birthdate": "11/11/1996",
              "birthcountry": "Sweden",
              "birthplace": "Göteborg",
              "height": "178 cm",
              "weight": "68 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/25/191065.png"
            }
          }
        },
        {
          "player_id": 62943,
          "position_id": 2,
          "number": 2,
          "captain": 0,
          "injured": false,
          "minutes": 1199,
          "appearences": 14,
          "lineups": 13,
          "substitute_in": 1,
          "substitute_out": null,
          "substitutes_on_bench": 3,
          "goals": 1,
          "owngoals": null,
          "assists": 1,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 28,
          "interceptions": 27,
          "yellowcards": 3,
          "yellowred": null,
          "redcards": null,
          "tackles": 25,
          "blocks": 3,
          "hit_post": null,
          "cleansheets": 6,
          "rating": "7.18",
          "fouls": {
            "committed": 16,
            "drawn": 16
          },
          "crosses": {
            "total": 57,
            "accurate": 12
          },
          "dribbles": {
            "attempts": 6,
            "success": null,
            "dribbled_past": 11
          },
          "duels": {
            "total": 118,
            "won": 65
          },
          "passes": {
            "total": 607,
            "accuracy": 71,
            "key_passes": 12
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": 2,
            "saves": null
          },
          "shots": {
            "shots_total": 9,
            "shots_on_target": 5,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 62943,
              "team_id": 939,
              "country_id": 556,
              "position_id": 2,
              "common_name": "D. Cools",
              "display_name": "Dion Cools",
              "fullname": "Dion Cools",
              "firstname": "Dion",
              "lastname": "Cools",
              "nationality": "Belgium",
              "birthdate": "04/06/1996",
              "birthcountry": "Malaysia",
              "birthplace": "Kuching",
              "height": "184 cm",
              "weight": "77 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/31/62943.png"
            }
          }
        },
        {
          "player_id": 440450,
          "position_id": 2,
          "number": 29,
          "captain": 0,
          "injured": false,
          "minutes": 1235,
          "appearences": 14,
          "lineups": 14,
          "substitute_in": null,
          "substitute_out": 1,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": 2,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 41,
          "interceptions": 30,
          "yellowcards": 2,
          "yellowred": null,
          "redcards": null,
          "tackles": 27,
          "blocks": 0,
          "hit_post": null,
          "cleansheets": 5,
          "rating": "7.21",
          "fouls": {
            "committed": 13,
            "drawn": 12
          },
          "crosses": {
            "total": 79,
            "accurate": 15
          },
          "dribbles": {
            "attempts": 20,
            "success": 14,
            "dribbled_past": 5
          },
          "duels": {
            "total": 124,
            "won": 72
          },
          "passes": {
            "total": 595,
            "accuracy": 77,
            "key_passes": 16
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 13,
            "shots_on_target": 2,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 440450,
              "team_id": 939,
              "country_id": 5,
              "position_id": 2,
              "common_name": "P. da Silva",
              "display_name": "Paulinho",
              "fullname": "Paulo Victor da Silva",
              "firstname": "Paulo Victor",
              "lastname": "da Silva",
              "nationality": "Brazil",
              "birthdate": "03/01/1995",
              "birthcountry": "Brazil",
              "birthplace": "São Paulo",
              "height": "178 cm",
              "weight": "71 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/2/440450.png"
            }
          }
        },
        {
          "player_id": 61736,
          "position_id": 2,
          "number": 14,
          "captain": 1,
          "injured": false,
          "minutes": 1319,
          "appearences": 15,
          "lineups": 15,
          "substitute_in": null,
          "substitute_out": 2,
          "substitutes_on_bench": null,
          "goals": 2,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 12,
          "interceptions": 28,
          "yellowcards": 1,
          "yellowred": null,
          "redcards": null,
          "tackles": 17,
          "blocks": 5,
          "hit_post": null,
          "cleansheets": 5,
          "rating": "7.31",
          "fouls": {
            "committed": 5,
            "drawn": 17
          },
          "crosses": {
            "total": 4,
            "accurate": null
          },
          "dribbles": {
            "attempts": 11,
            "success": 7,
            "dribbled_past": 4
          },
          "duels": {
            "total": 96,
            "won": 68
          },
          "passes": {
            "total": 1105,
            "accuracy": 87,
            "key_passes": 6
          },
          "penalties": {
            "won": null,
            "scores": 1,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 7,
            "shots_on_target": 5,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 61736,
              "team_id": 939,
              "country_id": 320,
              "position_id": 2,
              "common_name": "A. Scholz",
              "display_name": "Alexander Scholz",
              "fullname": "Alexander Scholz",
              "firstname": "Alexander",
              "lastname": "Scholz",
              "nationality": "Denmark",
              "birthdate": "24/10/1992",
              "birthcountry": "Denmark",
              "birthplace": "Kopenhagen",
              "height": "187 cm",
              "weight": "84 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/8/61736.png"
            }
          }
        },
        {
          "player_id": 23698072,
          "position_id": 2,
          "number": 46,
          "captain": 0,
          "injured": false,
          "minutes": 13,
          "appearences": 1,
          "lineups": null,
          "substitute_in": 1,
          "substitute_out": null,
          "substitutes_on_bench": 5,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": 1,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 0,
          "rating": "6.81",
          "fouls": {
            "committed": null,
            "drawn": 1
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": 2,
            "won": 2
          },
          "passes": {
            "total": 10,
            "accuracy": 80,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 1,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 23698072,
              "team_id": 939,
              "country_id": 320,
              "position_id": 2,
              "common_name": "J. Sery",
              "display_name": "Japhet Sery",
              "fullname": "Japhet Sery",
              "firstname": "Japhet",
              "lastname": "Sery",
              "nationality": "Denmark",
              "birthdate": "10/04/2000",
              "birthcountry": "Denmark",
              "birthplace": null,
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/24/23698072.png"
            }
          }
        },
        {
          "player_id": 83459,
          "position_id": 2,
          "number": 28,
          "captain": 1,
          "injured": false,
          "minutes": 1170,
          "appearences": 13,
          "lineups": 13,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": 2,
          "owngoals": null,
          "assists": 1,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 20,
          "interceptions": 27,
          "yellowcards": 2,
          "yellowred": null,
          "redcards": null,
          "tackles": 15,
          "blocks": 5,
          "hit_post": 1,
          "cleansheets": 5,
          "rating": "7.50",
          "fouls": {
            "committed": 19,
            "drawn": 11
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": 9,
            "success": 5,
            "dribbled_past": 1
          },
          "duels": {
            "total": 140,
            "won": 90
          },
          "passes": {
            "total": 778,
            "accuracy": 84,
            "key_passes": 5
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 14,
            "shots_on_target": 6,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 83459,
              "team_id": 939,
              "country_id": 320,
              "position_id": 2,
              "common_name": "E. Sviatchenko",
              "display_name": "Erik Sviatchenko",
              "fullname": "Erik Sviatchenko",
              "firstname": "Erik",
              "lastname": "Sviatchenko",
              "nationality": "Denmark",
              "birthdate": "04/10/1991",
              "birthcountry": "Denmark",
              "birthplace": "Viborg",
              "height": "185 cm",
              "weight": "82 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/3/83459.png"
            }
          }
        },
        {
          "player_id": 84570,
          "position_id": 3,
          "number": 34,
          "captain": 0,
          "injured": false,
          "minutes": 526,
          "appearences": 12,
          "lineups": 5,
          "substitute_in": 7,
          "substitute_out": 3,
          "substitutes_on_bench": 8,
          "goals": null,
          "owngoals": null,
          "assists": 1,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 2,
          "interceptions": 6,
          "yellowcards": 1,
          "yellowred": null,
          "redcards": null,
          "tackles": 9,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 5,
          "rating": "6.71",
          "fouls": {
            "committed": 7,
            "drawn": 9
          },
          "crosses": {
            "total": 10,
            "accurate": 1
          },
          "dribbles": {
            "attempts": 10,
            "success": 5,
            "dribbled_past": 8
          },
          "duels": {
            "total": 59,
            "won": 28
          },
          "passes": {
            "total": 191,
            "accuracy": 75,
            "key_passes": 4
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 11,
            "shots_on_target": 4,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 84570,
              "team_id": 939,
              "country_id": 1796,
              "position_id": 3,
              "common_name": "M. Anderson",
              "display_name": "Mikael Anderson",
              "fullname": "Mikael Anderson",
              "firstname": "Mikael",
              "lastname": "Anderson",
              "nationality": "Iceland",
              "birthdate": "01/07/1998",
              "birthcountry": "Iceland",
              "birthplace": null,
              "height": "180 cm",
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/26/84570.png"
            }
          }
        },
        {
          "player_id": 194768,
          "position_id": 3,
          "number": 40,
          "captain": 0,
          "injured": false,
          "minutes": 944,
          "appearences": 13,
          "lineups": 11,
          "substitute_in": 2,
          "substitute_out": 5,
          "substitutes_on_bench": 2,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 21,
          "interceptions": 14,
          "yellowcards": 3,
          "yellowred": null,
          "redcards": null,
          "tackles": 26,
          "blocks": 1,
          "hit_post": null,
          "cleansheets": 3,
          "rating": "6.94",
          "fouls": {
            "committed": 16,
            "drawn": 15
          },
          "crosses": {
            "total": 2,
            "accurate": null
          },
          "dribbles": {
            "attempts": 33,
            "success": 25,
            "dribbled_past": 13
          },
          "duels": {
            "total": 138,
            "won": 80
          },
          "passes": {
            "total": 446,
            "accuracy": 86,
            "key_passes": 10
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 7,
            "shots_on_target": 2,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 194768,
              "team_id": 939,
              "country_id": 47,
              "position_id": 3,
              "common_name": "J. Cajuste",
              "display_name": "Jens Cajuste",
              "fullname": "Jens-Lys Michel Cajuste",
              "firstname": "Jens-Lys Michel",
              "lastname": "Cajuste",
              "nationality": "Sweden",
              "birthdate": "10/08/1999",
              "birthcountry": "Sweden",
              "birthplace": null,
              "height": "188 cm",
              "weight": "77 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/16/194768.png"
            }
          }
        },
        {
          "player_id": 223604,
          "position_id": 3,
          "number": 10,
          "captain": 0,
          "injured": false,
          "minutes": 958,
          "appearences": 14,
          "lineups": 12,
          "substitute_in": 2,
          "substitute_out": 7,
          "substitutes_on_bench": 2,
          "goals": 1,
          "owngoals": null,
          "assists": 2,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 18,
          "interceptions": 9,
          "yellowcards": 2,
          "yellowred": null,
          "redcards": null,
          "tackles": 18,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 5,
          "rating": "7.19",
          "fouls": {
            "committed": 14,
            "drawn": 15
          },
          "crosses": {
            "total": 50,
            "accurate": 16
          },
          "dribbles": {
            "attempts": 18,
            "success": 12,
            "dribbled_past": 14
          },
          "duels": {
            "total": 120,
            "won": 55
          },
          "passes": {
            "total": 635,
            "accuracy": 78,
            "key_passes": 29
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": 1,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 25,
            "shots_on_target": 12,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 223604,
              "team_id": 939,
              "country_id": 5,
              "position_id": 3,
              "common_name": "E. da Silva Ferreira",
              "display_name": "Evander",
              "fullname": "Evander da Silva Ferreira",
              "firstname": "Evander",
              "lastname": "da Silva Ferreira",
              "nationality": "Brazil",
              "birthdate": "09/06/1998",
              "birthcountry": "Brazil",
              "birthplace": "Rio de Janeiro",
              "height": "179 cm",
              "weight": "76 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/20/223604.png"
            }
          }
        },
        {
          "player_id": 537108,
          "position_id": 3,
          "number": 38,
          "captain": 0,
          "injured": false,
          "minutes": 988,
          "appearences": 12,
          "lineups": 11,
          "substitute_in": 1,
          "substitute_out": 2,
          "substitutes_on_bench": 1,
          "goals": 1,
          "owngoals": null,
          "assists": 1,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 9,
          "interceptions": 24,
          "yellowcards": 3,
          "yellowred": null,
          "redcards": null,
          "tackles": 23,
          "blocks": 4,
          "hit_post": null,
          "cleansheets": 5,
          "rating": "7.22",
          "fouls": {
            "committed": 17,
            "drawn": 27
          },
          "crosses": {
            "total": 4,
            "accurate": 3
          },
          "dribbles": {
            "attempts": 13,
            "success": 8,
            "dribbled_past": 7
          },
          "duels": {
            "total": 128,
            "won": 75
          },
          "passes": {
            "total": 539,
            "accuracy": 86,
            "key_passes": 7
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 6,
            "shots_on_target": 2,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 537108,
              "team_id": 939,
              "country_id": 716,
              "position_id": 3,
              "common_name": "O. Frank",
              "display_name": "Frank Onyeka",
              "fullname": "Ogochukwu Onyeka Frank",
              "firstname": "Ogochukwu Onyeka",
              "lastname": "Frank",
              "nationality": "Nigeria",
              "birthdate": "01/01/1998",
              "birthcountry": "Nigeria",
              "birthplace": null,
              "height": "183 cm",
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/20/537108.png"
            }
          }
        },
        {
          "player_id": 537767,
          "position_id": 3,
          "number": 43,
          "captain": 0,
          "injured": false,
          "minutes": 355,
          "appearences": 10,
          "lineups": 4,
          "substitute_in": 6,
          "substitute_out": 4,
          "substitutes_on_bench": 7,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 9,
          "interceptions": 14,
          "yellowcards": 1,
          "yellowred": null,
          "redcards": null,
          "tackles": 7,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 5,
          "rating": "5.98",
          "fouls": {
            "committed": 2,
            "drawn": 5
          },
          "crosses": {
            "total": 1,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": 4
          },
          "duels": {
            "total": 32,
            "won": 18
          },
          "passes": {
            "total": 174,
            "accuracy": 82,
            "key_passes": 2
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 537767,
              "team_id": 939,
              "country_id": 320,
              "position_id": 3,
              "common_name": "N. Hautorp Madsen",
              "display_name": "Nicolas Madsen",
              "fullname": "Nicolas Martin Hautorp Madsen",
              "firstname": "Nicolas Martin",
              "lastname": "Hautorp Madsen",
              "nationality": "Denmark",
              "birthdate": "17/03/2000",
              "birthcountry": "Denmark",
              "birthplace": null,
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/7/537767.png"
            }
          }
        },
        {
          "player_id": 84619,
          "position_id": 3,
          "number": 11,
          "captain": 0,
          "injured": false,
          "minutes": 491,
          "appearences": 14,
          "lineups": 4,
          "substitute_in": 10,
          "substitute_out": 4,
          "substitutes_on_bench": 11,
          "goals": 1,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 23,
          "interceptions": 5,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": 4,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 5,
          "rating": "6.89",
          "fouls": {
            "committed": 2,
            "drawn": 10
          },
          "crosses": {
            "total": 49,
            "accurate": 12
          },
          "dribbles": {
            "attempts": 16,
            "success": 7,
            "dribbled_past": 1
          },
          "duels": {
            "total": 49,
            "won": 25
          },
          "passes": {
            "total": 210,
            "accuracy": 80,
            "key_passes": 17
          },
          "penalties": {
            "won": 1,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 11,
            "shots_on_target": 6,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 84619,
              "team_id": 939,
              "country_id": 98,
              "position_id": 3,
              "common_name": "A. Mabil",
              "display_name": "Awer Mabil",
              "fullname": "Awer Mabil",
              "firstname": "Awer",
              "lastname": "Mabil",
              "nationality": "Australia",
              "birthdate": "15/09/1995",
              "birthcountry": "Kenya",
              "birthplace": "Kakuma",
              "height": "179 cm",
              "weight": "65 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/11/84619.png"
            }
          }
        },
        {
          "player_id": 142478,
          "position_id": 4,
          "number": 21,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 142478,
              "team_id": 939,
              "country_id": 1578,
              "position_id": 4,
              "common_name": "C. Anene",
              "display_name": "Chuma Anene",
              "fullname": "Chuma Anene",
              "firstname": "Chuma",
              "lastname": "Anene",
              "nationality": "Norway",
              "birthdate": "14/05/1993",
              "birthcountry": "Norway",
              "birthplace": "Oslo",
              "height": "188 cm",
              "weight": "86 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/14/142478.png"
            }
          }
        },
        {
          "player_id": 1548396,
          "position_id": 4,
          "number": 74,
          "captain": 0,
          "injured": false,
          "minutes": 271,
          "appearences": 4,
          "lineups": 3,
          "substitute_in": 1,
          "substitute_out": 2,
          "substitutes_on_bench": 1,
          "goals": 1,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 10,
          "interceptions": 1,
          "yellowcards": 2,
          "yellowred": null,
          "redcards": null,
          "tackles": 5,
          "blocks": 1,
          "hit_post": null,
          "cleansheets": 2,
          "rating": "6.90",
          "fouls": {
            "committed": 12,
            "drawn": 4
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": 5,
            "success": 1,
            "dribbled_past": null
          },
          "duels": {
            "total": 57,
            "won": 24
          },
          "passes": {
            "total": 52,
            "accuracy": 57,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 7,
            "shots_on_target": 6,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 1548396,
              "team_id": 939,
              "country_id": 5,
              "position_id": 4,
              "common_name": "J. dos Santos Júnior",
              "display_name": "Júnior Brumado",
              "fullname": "José Francisco dos Santos Júnior",
              "firstname": "José Francisco",
              "lastname": "dos Santos Júnior",
              "nationality": "Brazil",
              "birthdate": "15/05/1999",
              "birthcountry": "Brazil",
              "birthplace": "Brumado",
              "height": "190 cm",
              "weight": "88 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/12/1548396.png"
            }
          }
        },
        {
          "player_id": 84620,
          "position_id": 4,
          "number": 36,
          "captain": 0,
          "injured": false,
          "minutes": 1166,
          "appearences": 15,
          "lineups": 14,
          "substitute_in": 1,
          "substitute_out": 8,
          "substitutes_on_bench": 1,
          "goals": 5,
          "owngoals": null,
          "assists": 4,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 23,
          "interceptions": 3,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": 5,
          "blocks": null,
          "hit_post": 1,
          "cleansheets": 5,
          "rating": "7.26",
          "fouls": {
            "committed": 5,
            "drawn": 20
          },
          "crosses": {
            "total": 60,
            "accurate": 17
          },
          "dribbles": {
            "attempts": 31,
            "success": 17,
            "dribbled_past": 8
          },
          "duels": {
            "total": 89,
            "won": 42
          },
          "passes": {
            "total": 340,
            "accuracy": 76,
            "key_passes": 31
          },
          "penalties": {
            "won": 1,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 25,
            "shots_on_target": 12,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 84620,
              "team_id": 939,
              "country_id": 320,
              "position_id": 4,
              "common_name": "A. Dreyer",
              "display_name": "Anders Dreyer",
              "fullname": "Anders Dreyer",
              "firstname": "Anders",
              "lastname": "Dreyer",
              "nationality": "Denmark",
              "birthdate": "02/05/1998",
              "birthcountry": "Denmark",
              "birthplace": "Bramming",
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/12/84620.png"
            }
          }
        },
        {
          "player_id": 23698077,
          "position_id": 4,
          "number": 45,
          "captain": 0,
          "injured": false,
          "minutes": 260,
          "appearences": 9,
          "lineups": 2,
          "substitute_in": 7,
          "substitute_out": 2,
          "substitutes_on_bench": 8,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 8,
          "interceptions": 1,
          "yellowcards": 1,
          "yellowred": null,
          "redcards": null,
          "tackles": 2,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 3,
          "rating": "6.64",
          "fouls": {
            "committed": 6,
            "drawn": 13
          },
          "crosses": {
            "total": 8,
            "accurate": 1
          },
          "dribbles": {
            "attempts": 19,
            "success": 11,
            "dribbled_past": 0
          },
          "duels": {
            "total": 53,
            "won": 29
          },
          "passes": {
            "total": 71,
            "accuracy": 88,
            "key_passes": 3
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 6,
            "shots_on_target": 4,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 23698077,
              "team_id": 939,
              "country_id": 320,
              "position_id": 4,
              "common_name": "G. Isaksen",
              "display_name": "Gustav Isaksen",
              "fullname": "Gustav Tang Isaksen",
              "firstname": "Gustav Tang",
              "lastname": "Isaksen",
              "nationality": "Denmark",
              "birthdate": "19/04/2001",
              "birthcountry": "Denmark",
              "birthplace": null,
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/29/23698077.png"
            }
          }
        },
        {
          "player_id": 190438,
          "position_id": 4,
          "number": 9,
          "captain": 0,
          "injured": false,
          "minutes": 788,
          "appearences": 12,
          "lineups": 9,
          "substitute_in": 3,
          "substitute_out": 3,
          "substitutes_on_bench": 3,
          "goals": 5,
          "owngoals": null,
          "assists": 3,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 25,
          "interceptions": 3,
          "yellowcards": 1,
          "yellowred": null,
          "redcards": null,
          "tackles": 4,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 5,
          "rating": "7.22",
          "fouls": {
            "committed": 17,
            "drawn": 7
          },
          "crosses": {
            "total": 2,
            "accurate": 1
          },
          "dribbles": {
            "attempts": 20,
            "success": 14,
            "dribbled_past": 2
          },
          "duels": {
            "total": 136,
            "won": 59
          },
          "passes": {
            "total": 177,
            "accuracy": 72,
            "key_passes": 11
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 28,
            "shots_on_target": 14,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 190438,
              "team_id": 939,
              "country_id": 1703,
              "position_id": 4,
              "common_name": "S. Kaba",
              "display_name": "Sory Kaba",
              "fullname": "Sory Kaba",
              "firstname": "Sory",
              "lastname": "Kaba",
              "nationality": "Guinea",
              "birthdate": "10/04/1995",
              "birthcountry": "Guinea",
              "birthplace": "Conakry",
              "height": "191 cm",
              "weight": "80 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/6/190438.png"
            }
          }
        },
        {
          "player_id": 6216,
          "position_id": 4,
          "number": 26,
          "captain": 0,
          "injured": false,
          "minutes": 43,
          "appearences": 4,
          "lineups": null,
          "substitute_in": 4,
          "substitute_out": null,
          "substitutes_on_bench": 7,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 1,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": 1,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 2,
          "rating": "4.83",
          "fouls": {
            "committed": null,
            "drawn": 2
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": 1,
            "success": 1,
            "dribbled_past": null
          },
          "duels": {
            "total": 7,
            "won": 5
          },
          "passes": {
            "total": 5,
            "accuracy": 100,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 2,
            "shots_on_target": 2,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 6216,
              "team_id": 939,
              "country_id": 320,
              "position_id": 4,
              "common_name": "L. Vibe",
              "display_name": "Lasse Vibe",
              "fullname": "Lasse Vibe",
              "firstname": "Lasse",
              "lastname": "Vibe",
              "nationality": "Denmark",
              "birthdate": "22/02/1987",
              "birthcountry": "Denmark",
              "birthplace": "Aarhus",
              "height": "181 cm",
              "weight": "72 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/8/6216.png"
            }
          }
        },
        {
          "player_id": 84011,
          "position_id": 4,
          "number": 7,
          "captain": 0,
          "injured": false,
          "minutes": 1049,
          "appearences": 15,
          "lineups": 12,
          "substitute_in": 3,
          "substitute_out": 9,
          "substitutes_on_bench": 3,
          "goals": 5,
          "owngoals": null,
          "assists": 2,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 23,
          "interceptions": 6,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": 12,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 5,
          "rating": "7.22",
          "fouls": {
            "committed": 4,
            "drawn": 30
          },
          "crosses": {
            "total": 20,
            "accurate": 4
          },
          "dribbles": {
            "attempts": 23,
            "success": 14,
            "dribbled_past": 5
          },
          "duels": {
            "total": 100,
            "won": 58
          },
          "passes": {
            "total": 468,
            "accuracy": 86,
            "key_passes": 25
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 17,
            "shots_on_target": 9,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 84011,
              "team_id": 939,
              "country_id": 320,
              "position_id": 4,
              "common_name": "P. Sisto Ifolo Emirmija",
              "display_name": "Pione Sisto",
              "fullname": "Pione Sisto Ifolo Emirmija",
              "firstname": "Pione",
              "lastname": "Sisto Ifolo Emirmija",
              "nationality": "Denmark",
              "birthdate": "04/02/1995",
              "birthcountry": "Uganda",
              "birthplace": "Kampala",
              "height": "171 cm",
              "weight": "64 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/11/84011.png"
            }
          }
        },
        {
          "player_id": 84980,
          "position_id": 2,
          "number": 18,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 84980,
              "team_id": 939,
              "country_id": 320,
              "position_id": 2,
              "common_name": "K. Riis",
              "display_name": "Kristian Riis",
              "fullname": "Kristian Dirks Riis",
              "firstname": "Kristian Dirks",
              "lastname": "Riis",
              "nationality": "Denmark",
              "birthdate": "17/02/1997",
              "birthcountry": "Denmark",
              "birthplace": "Haderslev",
              "height": "189 cm",
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/20/84980.png"
            }
          }
        },
        {
          "player_id": 5283381,
          "position_id": 2,
          "number": 27,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 5283381,
              "team_id": 939,
              "country_id": 320,
              "position_id": 2,
              "common_name": "O. Olsen",
              "display_name": "Oliver Olsen",
              "fullname": "Oliver Olsen",
              "firstname": "Oliver",
              "lastname": "Olsen",
              "nationality": "Denmark",
              "birthdate": "13/08/2000",
              "birthcountry": "Denmark",
              "birthplace": null,
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/21/5283381.png"
            }
          }
        },
        {
          "player_id": 24818229,
          "position_id": 4,
          "number": 10,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 24818229,
              "team_id": 939,
              "country_id": 320,
              "position_id": 4,
              "common_name": "D. Simsir",
              "display_name": "Doguhan Simsir",
              "fullname": "Doguhan Aral Simsir",
              "firstname": "Doguhan Aral",
              "lastname": "Simsir",
              "nationality": "Denmark",
              "birthdate": "19/06/2002",
              "birthcountry": "Denmark",
              "birthplace": null,
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/21/24818229.png"
            }
          }
        },
        {
          "player_id": 47518,
          "position_id": 4,
          "number": 33,
          "captain": 0,
          "injured": false,
          "minutes": 325,
          "appearences": 7,
          "lineups": 3,
          "substitute_in": 4,
          "substitute_out": 1,
          "substitutes_on_bench": 5,
          "goals": 1,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": 6,
          "interceptions": 1,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": 3,
          "blocks": null,
          "hit_post": null,
          "cleansheets": 2,
          "rating": "6.64",
          "fouls": {
            "committed": 2,
            "drawn": 3
          },
          "crosses": {
            "total": 1,
            "accurate": 1
          },
          "dribbles": {
            "attempts": 2,
            "success": 1,
            "dribbled_past": 1
          },
          "duels": {
            "total": 56,
            "won": 27
          },
          "passes": {
            "total": 84,
            "accuracy": 67,
            "key_passes": 2
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": 8,
            "shots_on_target": 4,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 47518,
              "team_id": 939,
              "country_id": 11,
              "position_id": 4,
              "common_name": "L. Pfeiffer",
              "display_name": "Luca Pfeiffer",
              "fullname": "Luca Pfeiffer",
              "firstname": "Luca",
              "lastname": "Pfeiffer",
              "nationality": "Germany",
              "birthdate": "20/08/1996",
              "birthcountry": "Germany",
              "birthplace": "Bad Mergentheim",
              "height": "196 cm",
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png"
            }
          }
        },
        {
          "player_id": 83716,
          "position_id": 2,
          "number": 5,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": 8,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 83716,
              "team_id": 939,
              "country_id": 320,
              "position_id": 2,
              "common_name": "D. Høegh",
              "display_name": "Daniel Høegh",
              "fullname": "Daniel Høegh",
              "firstname": "Daniel",
              "lastname": "Høegh",
              "nationality": "Denmark",
              "birthdate": "06/01/1991",
              "birthcountry": "Denmark",
              "birthplace": "Odense",
              "height": "190 cm",
              "weight": "79 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/4/83716.png"
            }
          }
        },
        {
          "player_id": 26670111,
          "position_id": 1,
          "number": 16,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 26670111,
              "team_id": 939,
              "country_id": 320,
              "position_id": 1,
              "common_name": "V. Thorsen",
              "display_name": "Valdemar Thorsen",
              "fullname": "Valdemar Birksø Thorsen",
              "firstname": "Valdemar Birksø",
              "lastname": "Thorsen",
              "nationality": "Denmark",
              "birthdate": "17/03/2001",
              "birthcountry": "Denmark",
              "birthplace": null,
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png"
            }
          }
        },
        {
          "player_id": 20694533,
          "position_id": 2,
          "number": null,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 20694533,
              "team_id": 939,
              "country_id": 716,
              "position_id": 2,
              "common_name": "H. Uzochokwu",
              "display_name": "Henry Uzochokwu",
              "fullname": "Henry Uzochokwu",
              "firstname": "Henry",
              "lastname": "Uzochokwu",
              "nationality": "Nigeria",
              "birthdate": "22/01/1999",
              "birthcountry": "Nigeria",
              "birthplace": null,
              "height": "170 cm",
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png"
            }
          }
        },
        {
          "player_id": 23698083,
          "position_id": 4,
          "number": 25,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 23698083,
              "team_id": 939,
              "country_id": 716,
              "position_id": 4,
              "common_name": "J. Abubakar",
              "display_name": "Jibril Abubakar",
              "fullname": "Jibril Abubakar",
              "firstname": "Jibril",
              "lastname": "Abubakar",
              "nationality": "Nigeria",
              "birthdate": "06/01/2000",
              "birthcountry": "Nigeria",
              "birthplace": null,
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png"
            }
          }
        },
        {
          "player_id": 32408,
          "position_id": 1,
          "number": 49,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": 3,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 32408,
              "team_id": 939,
              "country_id": 320,
              "position_id": 1,
              "common_name": "J. Lössl",
              "display_name": "Jonas Lössl",
              "fullname": "Jonas Lössl",
              "firstname": "Jonas",
              "lastname": "Lössl",
              "nationality": "Denmark",
              "birthdate": "01/02/1989",
              "birthcountry": "Denmark",
              "birthplace": "Kolding",
              "height": "195 cm",
              "weight": "89 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/24/32408.png"
            }
          }
        },
        {
          "player_id": 56300,
          "position_id": 2,
          "number": 3,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": 1,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 56300,
              "team_id": 939,
              "country_id": 5,
              "position_id": 2,
              "common_name": "A. Ferreira Silva",
              "display_name": "Ailton",
              "fullname": "Ailton Ferreira Silva",
              "firstname": "Ailton",
              "lastname": "Ferreira Silva",
              "nationality": "Brazil",
              "birthdate": "16/03/1995",
              "birthcountry": "Brazil",
              "birthplace": "Lauro de Freitas",
              "height": "181 cm",
              "weight": "66 kg",
              "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png"
            }
          }
        },
        {
          "player_id": 37423022,
          "position_id": 2,
          "number": 25,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 37423022,
              "team_id": 939,
              "country_id": 98,
              "position_id": 2,
              "common_name": "H. Bility",
              "display_name": "H. Bility",
              "fullname": "Hosine Bility",
              "firstname": "Hosine",
              "lastname": "Bility",
              "nationality": "Australia",
              "birthdate": "10/05/2001",
              "birthcountry": "Australia",
              "birthplace": null,
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png"
            }
          }
        },
        {
          "player_id": 23698086,
          "position_id": 4,
          "number": 11,
          "captain": 0,
          "injured": false,
          "minutes": null,
          "appearences": null,
          "lineups": null,
          "substitute_in": null,
          "substitute_out": null,
          "substitutes_on_bench": null,
          "goals": null,
          "owngoals": null,
          "assists": null,
          "saves": null,
          "inside_box_saves": null,
          "dispossesed": null,
          "interceptions": null,
          "yellowcards": null,
          "yellowred": null,
          "redcards": null,
          "tackles": null,
          "blocks": null,
          "hit_post": null,
          "cleansheets": null,
          "rating": null,
          "fouls": {
            "committed": null,
            "drawn": null
          },
          "crosses": {
            "total": null,
            "accurate": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "dribbled_past": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "passes": {
            "total": null,
            "accuracy": null,
            "key_passes": null
          },
          "penalties": {
            "won": null,
            "scores": null,
            "missed": null,
            "committed": null,
            "saves": null
          },
          "shots": {
            "shots_total": null,
            "shots_on_target": null,
            "shots_off_target": null
          },
          "player": {
            "data": {
              "player_id": 23698086,
              "team_id": 939,
              "country_id": 320,
              "position_id": 3,
              "common_name": "M. Hansen",
              "display_name": "Mads Kristian Hansen",
              "fullname": "Mads Kristian Hansen",
              "firstname": "Mads Kristian",
              "lastname": "Hansen",
              "nationality": "Denmark",
              "birthdate": "28/07/2002",
              "birthcountry": "Denmark",
              "birthplace": null,
              "height": null,
              "weight": null,
              "image_path": "https://cdn.sportmonks.com/images/soccer/players/6/23698086.png"
            }
          }
        }
    ],
    starters: [],
    others: []

}

const reducerTrainer = (state = initialState ,action) => {
    if(action.type === "ADD_STARTER"){
        return {
            ...state,
            starters: state.starters.concat(action.player),
            players: state.players.filter(j=>j.player_id !== action.player.player_id)
        }
    }
    if(action.type === "ADD_OTHER"){
        return {
            ...state,
            others: state.others.concat(action.player),
            players: state.players.filter(j=>j.player_id !== action.player.player_id)
        }
    }
    if(action.type === "REMOVE_STARTER"){
        return {
            ...state,
            players: state.players.concat(action.player),
            starters: state.starters.filter(j=>j.player_id !== action.player.player_id)
        }
    }
    if(action.type === "REMOVE_OTHER"){
        return {
            ...state,
            players: state.players.concat(action.player),
            others: state.others.filter(j=>j.player_id !== action.player.player_id)
        }
    }
    return state
}

export default createStore(reducerTrainer)