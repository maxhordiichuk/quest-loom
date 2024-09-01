import React, {ElementType} from "react";

export function withFormWrapper(Story: ElementType) {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <Story />
    </div>
  )
}
