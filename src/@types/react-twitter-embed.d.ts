declare module 'react-twitter-embed' {
  import { Component, ReactNode } from 'react'
  interface PropType {
    sourceType: any
    userId: any
    optiobs: any
  }
  export class TwitterTimelineEmbed extends Component {
    static propTypes: PropType
    constructor(props: any)
    buildChromeOptions(options: any): any
    buildOptions(): any
    renderWidget(options: any): void
    componentDidMount(): void
    componentWillUnmount(): void
    render(): ReactNode
  }
}

export {}
