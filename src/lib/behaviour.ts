import type { Draft } from 'immer';
import { produce } from 'immer';
import { useRef, useState } from 'react';

export class Behavioural<State> {
  constructor(private args: BehaviourStore<State>) {}
  protected produce(f: (draft: Draft<State>) => void | undefined) {
    return this.args.setState(produce(this.args.getState(), f));
  }
  protected get state(): Readonly<State> {
    return this.args.getState();
  }
}

export interface BehaviourStore<S> {
  getState: () => S;
  setState: (s: S) => void;
}

export class Store {
  static inMemory = <S>(initialState: S): BehaviourStore<S> => {
    let state = initialState;
    return { getState: () => state, setState: (s) => (state = s) };
  };
  static inUseState = <S>(initialState: S): BehaviourStore<S> => {
    const ref = useRef(initialState);
    const [_, setState] = useState(ref.current);
    return {
      getState: () => ref.current,
      setState(x) {
        ref.current = x;
        setState(x);
      },
    };
  };
}
