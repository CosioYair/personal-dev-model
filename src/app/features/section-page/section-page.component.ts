import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SECTIONS, type SectionDefinition } from '../../data/process-model';

@Component({
  selector: 'app-section-page',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, MatListModule, MatIconModule],
  templateUrl: './section-page.component.html',
  styleUrl: './section-page.component.scss',
})
export class SectionPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly sectionId = toSignal(this.route.data.pipe(map((d) => (d['sectionId'] as string) ?? '')), {
    initialValue: '',
  });

  readonly section = toSignal<SectionDefinition | undefined>(
    this.route.data.pipe(
      map((d) => {
        const id = d['sectionId'] as string;
        return SECTIONS[id];
      }),
    ),
    { initialValue: undefined },
  );
}
