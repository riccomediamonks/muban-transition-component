import CoreComponent from 'muban-core/lib/CoreComponent';
import mubanTransitionMixin from '../../../../../src/lib/mixin/MubanTransitionMixin';
import mubanTransitionCoreMixin from '../../../../../src/lib/mixin/MubanTransitionCoreMixin';
import PrimaryButtonTransitionController from './PrimaryButtonTransitionController';

export default class PrimaryButton extends mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)) {
  static displayName: string = 'primary-button';
  public transitionController: PrimaryButtonTransitionController;

  constructor(public element: HTMLElement) {
    super(element);

    this.transitionController = new PrimaryButtonTransitionController(this);
  }

  /**
   * @public
   * @method stopLoopingAnimation
   */
  public stopLoopingAnimation(): void {
    super.stopLoopingAnimation();
  }

  /**
   * @public
   * @method startLoopingAnimation
   */
  public startLoopingAnimation(): void {
    super.startLoopingAnimation();
  }

  public dispose() {
    super.dispose();
  }
}



