import * as React from "react"

const SimpleContent = props => {
  return (
    <section className="row">
      <div
        className="col"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </section>
  )
}

export default SimpleContent
