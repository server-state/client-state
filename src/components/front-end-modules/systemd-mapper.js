/*
systemd cbm status-codes:
(priority from top to bottom)

    [status name]   [ThemeType]         [case select]
  - stub            -> warning          <=> unitLoadState === "stub"
  - not-found       -> error            <=> unitLoadState === "not-found"
  - bad-setting     -> error            <=> unitLoadState === "bad-setting"
  - error           -> error            <=> unitLoadState === "error"
  - merged          -> information      <=> unitLoadState === "merged"
( - masked          -> information      <=> unitLoadState === "masked" /
  - masked          -> disabled         <=> unitLoadState === "masked" )
  - inactive        -> disabled         <=> activeState === "inactive" && unitFileState === "disabled"
  - not-activating  -> error            <=> activeState === "inactive" && unitFileState === "enabled"
  - active          -> success          <=> activeState === "active"
  - reloading       -> warning          <=> activeState === "reloading"
  - failed          -> error            <=> activeState === "failed"
  - activating      -> warning          <=> activeState === "activating"
  - deactivating    -> warning          <=> activeState === "deactivating"
  - maintenance     -> warning          <=> activeState === "maintenance"

  - no-information  -> error            <=> [self defined] (if unit state can not be obtained)

Run "systemctl --state=help" for more information.

*/

export function getStatus(unitLoadState, unitFileState, activeState) {
    if (!unitLoadState || typeof unitLoadState !== 'string')
        return 'no-information-by-load';
    
    if (unitLoadState !== 'loaded')
        return unitLoadState;
    
    if (!activeState || typeof activeState !== 'string')
        return 'no-information-by-active';

    if (activeState === 'inactive') {
        if (!unitFileState || typeof unitFileState  !== 'string')
            return 'no-information-by-file';
        
        if (unitFileState === "disabled")
            return "inactive"
        else
            return "not-activating"
    }

    return activeState;
}

export function getThemeType(status) {
    switch (status) {
        case 'not-found':
        case 'bad-setting':
        case 'error':
        case 'failed':
            return 'error';

        case 'reloading':
        case 'activating':
        case 'deactivating':
        case 'maintenance':
            return 'warning';

        case 'active':
            return 'success';

        case 'merged':
        case 'masked':
            return 'information';

        case 'inactive':
        // case 'masked':
            return 'disabled';

        default:
            return 'error';
  }
}

export default { getStatus, getThemeType };