import React from 'react';
import { ImageBackground as NSImageBackground  } from 'react-native';

export function LoginBackground() {
    return (
        <NSImageBackground
            src={require('@/assets/images/cover/login-bg.png')}
            resizeMode="cover"
            style={{ flex: 1 }}
        />
    );
}

export default LoginBackground;