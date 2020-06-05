import SystemConfigurations from './../utils/SystemConfigurations';

const defaultConfig = {
    darkMode: true,
};

export default function systemConfigurationsReducer(
    state = defaultConfig,
    action: any
): SystemConfigurations {
    switch (action.type) {
        case 'UPDATE_SYSTEM_CONFIGURATIONS':
            return action.payload;
        default:
            return state;
    }
}
