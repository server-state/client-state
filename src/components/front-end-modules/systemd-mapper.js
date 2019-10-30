/*
systemd status-codes:

    [Name]             [Message type]       [come from]       [Priority (nice)]
  - activating      -> warning          <=> activeState     - 2
  - reloading       -> warning          <=> activeState     - 2
  - active          -> success          <=> activeState     - 3
  - deactivating    -> warning          <=> activeState     - 2
  - disabled        -> disabled         <=> unitFileState   - 0
  - not-found       -> error            <=> unitLoadState   - 1
  - masked          -> disabled         <=> unitLoadState   - 0-1
  - maintenance     -> warning          <=> activeState     - 2
  - failed          -> error            <=> activeState     - 1
  - bad-setting     -> error            <=> unitLoadState   - 1
  - error           -> error            <=> unitLoadState   - 1

Run "systemctl --state=help" for more information.

*/

export function getStatus(unitLoadState, unitFileState, activeState) {
  return 'disabled';
}

export function getMessageType(status) {
  return 'disabled';
}

export default {getStatus, getMessageType};