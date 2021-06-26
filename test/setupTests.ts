import '@testing-library/jest-dom/extend-expect';
import { toHaveNoViolations } from 'jest-axe';

// Init
expect.extend(toHaveNoViolations);
