class Game{
    constructor(){
        this.currentRound = 1;
        this.currentQuiz = 1;
        this.teams = [];
        this.rounds = [];
        this.results = [];
        this.resultService = null;
        this.teamService = null;
        this.gameService = null;
    }

    convertForFirebase(){
        let temp = {};
        for(let i = 0; i < this.teams.length; i++){
            temp[this.teams[i].id] = this.teams[i].name;
        }
        this.teams = temp;

        let roundsTemp = {};
        for(let i = 0; i < this.rounds.length; i++){
            roundsTemp[this.rounds[i].id] = this.rounds[i].quantityOfQuestions;
        }
        this.rounds = roundsTemp;

        return this;
    }


    convertFromFirebase(){
        let roundTemp = []
        for(let key in this.rounds){
           roundTemp.push(new GameRound(key, this.rounds[key]));
        }
        this.rounds = roundTemp;

        let teamsTemp = []
        for(let key in this.teams){
            teamsTemp.push({id:key, name:this.teams[key]});
        }
        this.teams = teamsTemp;

        return this;
    }


    setTeamService(teamService){
        this.teamService = teamService;
    }

    setResultService(resultService){
        this.resultService = resultService;
    }

    setGameService(gameService){
        this.gameService = gameService;
    }



    getRoundsQuantity(){
        return rounds.length;
    }

    getGameResult(){
       let gameResults = this.resultService.getResultsById();

    }

    getRoundResult(){

    }

    getTeamResult(teamId){
        let teamResult = this.resultService.getTeamResults(teamId, this.id);
    }
}