import type { Identifiable } from '@/types/common'

export abstract class BaseUploader<Entity extends Identifiable> {
  entity: Entity

  constructor(entity: Entity) {
    this.entity = entity
  }

  abstract get currentKey(): string | null

  abstract getKey(filename: string): string

  abstract updateEntity(imageKey: string | null): Promise<Entity>
}
