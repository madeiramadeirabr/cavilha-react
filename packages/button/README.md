

```jsx
import { ButtonHOC, ButtonProps } from "cavilha-ui/components/"

const YourWrappedComponent = (props) => <a {...props} />

const ButtonWithRouter = (props: ButtonProps) => ButtonHOC(props)(YourWrappedComponent)
```
