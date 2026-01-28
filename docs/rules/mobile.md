# Mobile Development Standards

## 1. General Architecture
- **Architecture Patterns**: Use MVVM (Model-View-ViewModel) or VIPER for clean separation of concerns.
- **State Management**: Use platform-appropriate state management (e.g., Provider/Riverpod for Flutter, Redux/Context for React Native).

## 2. iOS (Swift)
- **UI/UX**: Strictly follow Apple's Human Interface Guidelines (HIG).
- **Testing**: Use XCTest for unit tests and XCUITest for UI automation.

## 3. Android (Kotlin)
- **Modern Android Development (MAD)**: Preferred over legacy patterns. Use Jetpack Compose for UI.
- **Material Design**: Integrate the latest Material Design 3 guidelines.
- **Testing**: Use JUnit 4/5 for unit logic and Espresso for UI tests.

## 4. Cross-Platform (React Native / Flutter)
- **Native Modules**: Bridge native code only when necessary for performance or platform-specific APIs not available in plugins.
- **Testing**:
  - React Native: Jest + React Native Testing Library.
  - Flutter: `flutter test` for unit/widget tests, `integration_test` for flow.
