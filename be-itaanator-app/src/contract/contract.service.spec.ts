import { Test, TestingModule } from '@nestjs/testing';
import { RelationService } from './contract.service';

describe('RelationService', () => {
  let service: RelationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationService],
    }).compile();

    service = module.get<RelationService>(RelationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
