import React, { useRef } from 'react';
import { Button, Typography, Paper, Box } from '@mui/material';

const Home = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const handleNavigation = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Box mb={2}>
        <Button variant="contained" onClick={() => handleNavigation(section1Ref)} style={{ marginLeft: '8px' }}>
          Section 1
        </Button>
        <Button variant="contained" onClick={() => handleNavigation(section2Ref)} style={{ marginLeft: '8px' }}>
          Section 2
        </Button>
        <Button variant="contained" onClick={() => handleNavigation(section3Ref)} style={{ marginLeft: '8px' }}>
          Section 3
        </Button>
        <Button variant="contained" onClick={() => handleNavigation(section4Ref)} style={{ marginLeft: '8px' }}>
          Section 4
        </Button>
        <Button variant="contained" onClick={() => handleNavigation(section5Ref)} style={{ marginLeft: '8px' }}>
          Section 5
        </Button>
      </Box>

      {/* Section Content */}
      <div ref={section1Ref} style={{ margin: '50px 0' }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h6">Section 1: Large conA fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.tent...</Typography>
        </Paper>
      </div>
      <div ref={section2Ref} style={{ margin: '50px 0' }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h6">Section 2: Large contA fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.ent...</Typography>
        </Paper>
      </div>
      <div ref={section3Ref} style={{ margin: '50px 0' }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h6">Section 3: Large contA fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.ent...</Typography>
        </Paper>
      </div>
      <div ref={section4Ref} style={{ margin: '50px 0' }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h6">Section 4: Large conthfddddddddddddddddddddA fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.ddddddddddddddddddddddddddddddddddgent...</Typography>
        </Paper>
      </div>
      <div ref={section5Ref} style={{ margin: '50px 0' }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h6">Section 5: Large A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.

The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.content...</Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
