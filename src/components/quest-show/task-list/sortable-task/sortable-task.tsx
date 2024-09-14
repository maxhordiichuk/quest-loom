import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'
import { useSortable } from '@dnd-kit/sortable'

import type { Task } from '@/types/models/creator'

import { TaskCard } from '../task-card'

interface SortableTaskProps {
  task: Task
}

export function SortableTask({ task }: SortableTaskProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const dragHandler = (
    <div className="cursor-move w-4 h-4 mr-2" {...attributes} {...listeners}>
      <GripVertical className="w-4 h-4" />
    </div>
  )

  return (
    <div ref={setNodeRef} style={style}>
      <TaskCard key={task.id} task={task} dragHandler={dragHandler} />
    </div>
  )
}
