import CoreComponent from 'muban-core/lib/CoreComponent';
import { mubanTransitionCoreMixin, mubanTransitionMixin, IMubanTransitionMixin } from 'muban-transition-component';

export const base: Constructor<IMubanTransitionMixin> &
  typeof CoreComponent = abstractBlockMixin(mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)));
export default class AbstractTransitionBlock extends base {

}
