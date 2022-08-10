import * as React from "react"

const Content2Col = props => {
  return (
    <section className="row row-44">
      {props.content.headline && (
        <div className="col-12">
          <h2 className="headline-5">{props.content.headline}</h2>
        </div>
      )}
      <div className="col-12 col-sm-6">
        <div
          className="zero-p-first-child"
          dangerouslySetInnerHTML={{ __html: props.content.contentLeft }}
        />
      </div>
      <div className="col-12 col-sm-6">
        <div
          className="zero-p-first-child"
          dangerouslySetInnerHTML={{ __html: props.content.contentRight }}
        />
      </div>
    </section>
  )
}

export default Content2Col
