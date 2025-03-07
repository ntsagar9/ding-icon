import { Icon, DingIconProvider } from 'ding-icons'

export default function IconTest() {
  return (
    <div>
      {/* Default context values */}
      <DingIconProvider color="red" size="32px">
        <Icon name="zoom" />
        <Icon name="zoom-in" color="blue" /> {/* Override color */}
      </DingIconProvider>
      
      {/* Nested providers */}
      <DingIconProvider color="green">
        <Icon name="zoom-out" /> {/* Inherits size from parent */}
        <DingIconProvider size="40px">
          <Icon name="zoom-text" /> {/* Green + 40px */}
        </DingIconProvider>
      </DingIconProvider>
    </div>
  )
}