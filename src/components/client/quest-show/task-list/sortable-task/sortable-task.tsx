import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'
import { useSortable } from '@dnd-kit/sortable'

import { Task } from '@/db/types'
import type { deleteTask, updateTask } from '@/actions'

import { TaskCard } from '../task-card'

interface SortableTaskProps {
  task: Task
  deleteTaskAction: typeof deleteTask
  updateTaskAction: typeof updateTask
}

export function SortableTask({ task, deleteTaskAction, updateTaskAction }: SortableTaskProps) {
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
      <TaskCard
        key={task.id}
        task={task}
        deleteTaskAction={deleteTaskAction}
        updateTaskAction={updateTaskAction}
        dragHandler={dragHandler}
      />
    </div>
  )
}
