'use client'

import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { startTransition, useEffect, useState } from 'react'

import { useErrorToast } from '@/hooks/use-error-toast'
import type { DeleteTaskAction, ReorderTaskAction, UpdateTaskAction } from '@/types/requests'
import type { Task } from '@/types/models/creator'

import { SortableTask } from './sortable-task'

interface TaskListProps {
  tasks: Task[]
  deleteTask: DeleteTaskAction
  updateTask: UpdateTaskAction
  reorderTask: ReorderTaskAction
}

export function TaskList({
  tasks: propsTasks,
  deleteTask,
  updateTask,
  reorderTask,
}: TaskListProps) {
  const { toastErrors } = useErrorToast()
  const [tasks, setTasks] = useState(propsTasks)

  useEffect(() => {
    setTasks(propsTasks)
  }, [propsTasks])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const reorderAction = async (id: string, oldIndex: number, newIndex: number) => {
    const result = await reorderTask({ id, oldIndex, newIndex })

    if (!result.success) {
      toastErrors(result.errors)
      setTasks(propsTasks)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over?.id && active.id !== over.id) {
      const oldIndex = tasks.findIndex(t => t.id === active.id)
      const newIndex = tasks.findIndex(t => t.id === over.id)

      setTasks(arrayMove(tasks, oldIndex, newIndex))
      reorderAction(active.id as string, oldIndex, newIndex)
    }
  }

  return (
    <DndContext
      id="task-list"
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="grid gap-4">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map(task => (
            <SortableTask
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  )
}
