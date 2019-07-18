import { Test, TestingModule } from '@nestjs/testing';
import { Mysql.Provider } from './mysql.provider';

describe('Mysql.Provider', () => {
  let provider: Mysql.Provider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Mysql.Provider],
    }).compile();

    provider = module.get<Mysql.Provider>(Mysql.Provider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
