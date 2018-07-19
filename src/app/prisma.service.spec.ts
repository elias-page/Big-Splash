import { TestBed, inject } from '@angular/core/testing';

import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrismaService]
    });
  });

  it('should be created', inject([PrismaService], (service: PrismaService) => {
    expect(service).toBeTruthy();
  }));
});
