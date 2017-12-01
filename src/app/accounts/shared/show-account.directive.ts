import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
import { AccountsService } from './accounts.service';

@Directive({
  selector: '[appShowAccount]'
})
export class ShowAccountDirective implements OnInit {

  condition: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private accountsService: AccountsService,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set showAuthed(condition: boolean) {
    this.condition = condition;
  }

  ngOnInit(): void {
    this.accountsService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    )
  }

}
