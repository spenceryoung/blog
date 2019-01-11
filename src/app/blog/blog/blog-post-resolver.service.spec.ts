import { TestBed } from '@angular/core/testing';

import { BlogPostResolver } from './blog-post-resolver.service';

describe('BlogPostResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogPostResolver = TestBed.get(BlogPostResolver);
    expect(service).toBeTruthy();
  });
});
