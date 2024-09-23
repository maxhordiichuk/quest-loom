import { Clipboard } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { clsx } from 'clsx'

interface AssignmentFieldsProps {
  assignment: {
    url: string
  }
}

export function AssignmentFields({ assignment }: AssignmentFieldsProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(assignment.url)
    setIsCopied(true)
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={assignment.url}
        readOnly
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <Button
        variant="outline"
        className={clsx(
          'flex-shrink-0',
          isCopied && 'text-green-700 border-green-700 hover:bg-green-100'
        )}
        onClick={handleCopy}
      >
        <Clipboard className="w-4 h-4 mr-2" />
        {isCopied ? 'Copied!' : 'Copy'}
      </Button>
    </div>
  )
}
