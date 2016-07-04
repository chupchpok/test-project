export class MainController {
  constructor ($log, jackpot) {
    'ngInject';

    $log.info(jackpot);

    this.jackpot = jackpot.data;

  }


}
