import fetch from 'node-fetch';
const boolean = () => Math.random() < 0.5;
const addition = (n, m) => {
    return typeof n == 'number' && typeof m == 'number' ? n + m : 'Use only numbers';
} 

//returns n number of games of time control timeClass



export default { boolean, addition };

const gamesList = {
    "games": [
        {
            "url": "https://www.chess.com/game/daily/353962709",
            "pgn": "[Event \"Let's Play!\"]\n[Site \"Chess.com\"]\n[Date \"2021.08.29\"]\n[Round \"-\"]\n[White \"dsebom\"]\n[Black \"N0tably\"]\n[Result \"1-0\"]\n[CurrentPosition \"r6r/1pp2R2/6kp/5R1P/1pPbp1p1/P5P1/4K3/8 b - - 0 31\"]\n[Timezone \"UTC\"]\n[ECO \"A10\"]\n[ECOUrl \"https://www.chess.com/openings/English-Opening-Anglo-Lithuanian-Variation\"]\n[UTCDate \"2021.08.29\"]\n[UTCTime \"21:02:38\"]\n[WhiteElo \"1368\"]\n[BlackElo \"1223\"]\n[TimeControl \"1/86400\"]\n[Termination \"dsebom won by checkmate\"]\n[StartTime \"21:02:38\"]\n[EndDate \"2021.09.09\"]\n[EndTime \"13:15:36\"]\n[Link \"https://www.chess.com/game/daily/353962709\"]\n\n1. c4 {[%clk 23:54:12]} 1... Nc6 {[%clk 23:59:12]} 2. e3 {[%clk 23:58:02]} 2... e6 {[%clk 23:44:27]} 3. Nc3 {[%clk 23:48:56]} 3... d5 {[%clk 20:12:10]} 4. Nf3 {[%clk 23:47:58]} 4... d4 {[%clk 23:59:13]} 5. Nb5 {[%clk 14:41:53]} 5... dxe3 {[%clk 18:22:43]} 6. dxe3 {[%clk 23:19:05]} 6... Qxd1+ {[%clk 23:57:34]} 7. Kxd1 {[%clk 23:59:48]} 7... Kd8 {[%clk 14:07:20]} 8. g3 {[%clk 12:39:02]} 8... a6 {[%clk 23:58:34]} 9. Nc3 {[%clk 23:27:56]} 9... Nf6 {[%clk 23:57:02]} 10. Bh3 {[%clk 23:55:41]} 10... Bc5 {[%clk 21:19:31]} 11. Ke2 {[%clk 22:57:46]} 11... Nb4 {[%clk 23:34:20]} 12. a3 {[%clk 23:59:02]} 12... Nc6 {[%clk 23:57:00]} 13. b4 {[%clk 23:55:37]} 13... Ba7 {[%clk 20:53:05]} 14. Ng5 {[%clk 23:08:53]} 14... Ke7 {[%clk 8:05:22]} 15. Rd1 {[%clk 23:24:48]} 15... h6 {[%clk 23:59:21]} 16. Nge4 {[%clk 23:59:01]} 16... g5 {[%clk 23:58:20]} 17. f4 {[%clk 23:39:30]} 17... Nxe4 {[%clk 19:54:35]} 18. Nxe4 {[%clk 23:22:45]} 18... f5 {[%clk 23:59:29]} 19. Nf6 {[%clk 23:56:03]} 19... Kxf6 {[%clk 23:40:01]} 20. Bb2+ {[%clk 23:27:26]} 20... e5 {[%clk 18:52:54]} 21. fxe5+ {[%clk 21:11:02]} 21... Nxe5 {[%clk 10:59:27]} 22. Bxe5+ {[%clk 23:53:54]} 22... Kxe5 {[%clk 16:46:03]} 23. Rd5+ {[%clk 16:14:04]} 23... Kf6 {[%clk 19:04:37]} 24. e4 {[%clk 22:13:22]} 24... fxe4 {[%clk 0:00:00]} 25. Rf1+ {[%clk 22:27:30]} 25... Kg6 {[%clk 23:59:29]} 26. Bf5+ {[%clk 23:22:15]} 26... Bxf5 {[%clk 23:58:06]} 27. Rdxf5 {[%clk 10:37:42]} 27... Bd4 {[%clk 17:21:14]} 28. h4 {[%clk 21:50:01]} 28... g4 {[%clk 13:17:16]} 29. Rf7 {[%clk 20:11:21]} 29... a5 {[%clk 15:13:55]} 30. R1f5 {[%clk 19:24:27]} 30... axb4 {[%clk 4:48:14]} 31. h5# {[%clk 23:53:02]} 1-0\n",
            "time_control": "1/86400",
            "end_time": 1631193336,
            "rated": true,
            "accuracies": {
                "white": 54.77,
                "black": 73.6
            },
            "fen": "r6r/1pp2R2/6kp/5R1P/1pPbp1p1/P5P1/4K3/8 b - - 0 31",
            "start_time": 1630270958,
            "time_class": "daily",
            "rules": "chess",
            "white": {
                "rating": 1368,
                "result": "win",
                "@id": "https://api.chess.com/pub/player/dsebom",
                "username": "dsebom"
            },
            "black": {
                "rating": 1223,
                "result": "checkmated",
                "@id": "https://api.chess.com/pub/player/n0tably",
                "username": "N0tably"
            }
        },
        {
            "url": "https://www.chess.com/game/live/24945711529",
            "pgn": "[Event \"Live Chess\"]\n[Site \"Chess.com\"]\n[Date \"2021.09.09\"]\n[Round \"-\"]\n[White \"pul12kit\"]\n[Black \"dsebom\"]\n[Result \"0-1\"]\n[CurrentPosition \"3Rnk2/4r3/3Q4/8/8/p5P1/PbP2P1P/6K1 w - -\"]\n[Timezone \"UTC\"]\n[ECO \"B10\"]\n[ECOUrl \"https://www.chess.com/openings/Caro-Kann-Defense-2.Nf3-d5\"]\n[UTCDate \"2021.09.09\"]\n[UTCTime \"16:59:24\"]\n[WhiteElo \"1050\"]\n[BlackElo \"1143\"]\n[TimeControl \"600\"]\n[Termination \"dsebom won on time\"]\n[StartTime \"16:59:24\"]\n[EndDate \"2021.09.09\"]\n[EndTime \"17:19:25\"]\n[Link \"https://www.chess.com/game/live/24945711529\"]\n\n1. e4 {[%clk 0:10:00]} 1... c6 {[%clk 0:09:59.1]} 2. Nf3 {[%clk 0:09:58.9]} 2... d5 {[%clk 0:09:53.6]} 3. Qe2 {[%clk 0:09:35.3]} 3... dxe4 {[%clk 0:09:42]} 4. Qxe4 {[%clk 0:09:32.8]} 4... Nf6 {[%clk 0:09:40.1]} 5. Qc4 {[%clk 0:09:19.7]} 5... Be6 {[%clk 0:09:22.4]} 6. Qb4 {[%clk 0:09:09.2]} 6... b6 {[%clk 0:09:02.2]} 7. Bc4 {[%clk 0:08:54]} 7... Bxc4 {[%clk 0:08:36.8]} 8. Qxc4 {[%clk 0:08:50.4]} 8... b5 {[%clk 0:08:29.4]} 9. Qb3 {[%clk 0:08:32]} 9... g6 {[%clk 0:08:23.5]} 10. O-O {[%clk 0:08:30.2]} 10... Bg7 {[%clk 0:08:18]} 11. Re1 {[%clk 0:08:27.6]} 11... O-O {[%clk 0:08:11.8]} 12. Nc3 {[%clk 0:08:08.6]} 12... a5 {[%clk 0:07:53.3]} 13. d4 {[%clk 0:08:03.9]} 13... a4 {[%clk 0:07:38]} 14. Qb4 {[%clk 0:07:53.5]} 14... Na6 {[%clk 0:07:24.3]} 15. Qa3 {[%clk 0:07:26.1]} 15... Re8 {[%clk 0:07:14.1]} 16. Ne4 {[%clk 0:07:13.6]} 16... Qxd4 {[%clk 0:06:28.6]} 17. Nxd4 {[%clk 0:07:08.6]} 17... c5 {[%clk 0:06:16.1]} 18. Nc6 {[%clk 0:06:37.6]} 18... Nd5 {[%clk 0:05:32.6]} 19. Bg5 {[%clk 0:06:17]} 19... f6 {[%clk 0:05:07.8]} 20. Nxc5 {[%clk 0:05:49.8]} 20... fxg5 {[%clk 0:04:44.2]} 21. Nxe7+ {[%clk 0:05:18.7]} 21... Nxe7 {[%clk 0:04:40]} 22. Qf3 {[%clk 0:05:00.8]} 22... Nxc5 {[%clk 0:04:00.1]} 23. g3 {[%clk 0:03:56.4]} 23... Bxb2 {[%clk 0:03:40.4]} 24. Rab1 {[%clk 0:03:43.7]} 24... a3 {[%clk 0:03:34.9]} 25. Qg4 {[%clk 0:03:12.9]} 25... Rad8 {[%clk 0:03:11.7]} 26. Qxg5 {[%clk 0:03:03.8]} 26... Rd5 {[%clk 0:02:46.6]} 27. Qg4 {[%clk 0:02:35]} 27... Rd2 {[%clk 0:02:22.5]} 28. Re2 {[%clk 0:02:12.6]} 28... h5 {[%clk 0:02:01.3]} 29. Qf3 {[%clk 0:01:52.5]} 29... Rf8 {[%clk 0:01:45.3]} 30. Qe3 {[%clk 0:01:39.9]} 30... Rxe2 {[%clk 0:01:19.8]} 31. Qxe2 {[%clk 0:01:36.3]} 31... Re8 {[%clk 0:01:05.5]} 32. Qxb5 {[%clk 0:01:28.4]} 32... Kf8 {[%clk 0:00:59.5]} 33. Qxc5 {[%clk 0:01:21.1]} 33... g5 {[%clk 0:00:56]} 34. Qxg5 {[%clk 0:01:13.9]} 34... Ng8 {[%clk 0:00:45.2]} 35. Qxh5 {[%clk 0:01:00.9]} 35... Re7 {[%clk 0:00:42.9]} 36. Rd1 {[%clk 0:00:51.1]} 36... Nf6 {[%clk 0:00:33.2]} 37. Qh6+ {[%clk 0:00:39.8]} 37... Rg7 {[%clk 0:00:24.2]} 38. Rd8+ {[%clk 0:00:31.7]} 38... Ne8 {[%clk 0:00:20]} 39. Qd6+ {[%clk 0:00:08.4]} 39... Re7 {[%clk 0:00:18.8]} 0-1\n",
            "time_control": "600",
            "end_time": 1631207965,
            "rated": true,
            "accuracies": {
                "white": 55.48,
                "black": 63.98
            },
            "fen": "3Rnk2/4r3/3Q4/8/8/p5P1/PbP2P1P/6K1 w - -",
            "time_class": "rapid",
            "rules": "chess",
            "white": {
                "rating": 1050,
                "result": "timeout",
                "@id": "https://api.chess.com/pub/player/pul12kit",
                "username": "pul12kit"
            },
            "black": {
                "rating": 1143,
                "result": "win",
                "@id": "https://api.chess.com/pub/player/dsebom",
                "username": "dsebom"
            }
        }
    ]
}
const latestGameType = (n, timeClass, listOfGames) => {
    let filteredArr = listOfGames.games.filter(function (el) {
        return el.time_class == timeClass;
    });
    filteredArr.splice(n, filteredArr - n);
    console.log(filteredArr);
}

async function premiumStatus(username){
    const hasPremium = fetch(`https://api.chess.com/pub/player/${username}`)
    .then(function (response){
        return response.json();
    })
    .then(function (response){
        return response.status == "premium" ? true : false;
    });
    return await hasPremium;
    console.log(answer);
}

async function testPrint(name) {
    const username = name;
    const answer = await premiumStatus(username);
    console.log(answer);
}

premiumStatus('glamourmanure');

/*
fetch("https://api.chess.com/pub/player/dsebom")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
  */