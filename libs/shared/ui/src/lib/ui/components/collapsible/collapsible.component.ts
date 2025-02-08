import {
  Component,
  computed,
  input,
  output,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as uuid from 'uuid';

export interface CollapsibleState {
  id: string;
  isOpen: boolean;
  isDisabled: boolean;
  hasError: boolean;
  isLoading: boolean;
  isFocused: boolean;
}

@Component({
  selector: 'mnpl-collapsible',
  imports: [CommonModule],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CollapsibleComponent {
  /**
   * The open state of the collapsible when it is initially rendered.
   * @param {boolean}
   * @default false
   */
  defaultOpen = input<boolean>(false);

  /**
   * When true, prevents the user from interacting with the collapsible.
   * @param {boolean}
   * @default false
   */
  setDisabled = input<boolean>(false);

  private _collapsibleState = signal<CollapsibleState>({
    id: "collapsible-" + uuid.v4(),
    isOpen: false,
    isDisabled: false,
    hasError: false,
    isLoading: false,
    isFocused: false,
  });

  collapsibleState = this._collapsibleState.asReadonly();
  id = computed(() => this.collapsibleState().id);
  isOpen = computed(() => this.collapsibleState().isOpen);
  isDisabled = computed(() => this.collapsibleState().isDisabled);
  hasError = computed(() => this.collapsibleState().hasError);
  isLoading = computed(() => this.collapsibleState().isLoading);
  isFocused = computed(() => this.collapsibleState().isFocused);

  toggleIsOpen() {
    this._collapsibleState.update((state) => ({
      ...state,
      isOpen: !this.isOpen(),
    }));
  }
}
