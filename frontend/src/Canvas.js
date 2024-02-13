import React, { useState, useEffect } from 'react';

const Canvas = () => {
  const [components, setComponents] = useState([]);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('type', e.target.getAttribute('data-type'));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleDrop = (e) => {
      e.preventDefault();
      const canvas = document.getElementById('canvas');
      const rect = canvas.getBoundingClientRect();
      const type = e.dataTransfer.getData('type');
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addComponent(type, x, y);
    };

    const canvas = document.getElementById('canvas');
    canvas.addEventListener('dragover', handleDragOver);
    canvas.addEventListener('drop', handleDrop);

    return () => {
      canvas.removeEventListener('dragover', handleDragOver);
      canvas.removeEventListener('drop', handleDrop);
    };
  }, [components]);

  const addComponent = (type, x, y) => {
    const newComponent = {
      id: components.length + 1,
      type,
      x,
      y,
      label: 'Editable Label'// Default editable label
    };
    setComponents([...components, newComponent]);
  };

  const updateLabel = (id, newLabel) => {
    setComponents(components.map(component => 
      component.id === id ? { ...component, label: newLabel } : component
    ));
  };

  const renderComponent = (component) => {
    switch (component.type) {
      case 'date':
        return <input type="date" />;
      case 'text':
        return <input type="text" placeholder="Placeholder" />;
      case 'select':
        return (
          <select>
            <option>Option 1</option>
            {/* Add more options as needed */}
          </select>
        );
      case 'radio':
        return <div><input type="radio" name="radio" /> Option</div>;
      case 'checkbox':
        return <div><input type="checkbox" /> Option</div>;
      case 'textarea':
        return <textarea placeholder="Placeholder"></textarea>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
      <div className="component" draggable="true" data-type="date" onDragStart={handleDragStart}>Date Input</div>
        <div className="component" draggable="true" data-type="text" onDragStart={handleDragStart}>Text Input</div>
        <div className="component" draggable="true" data-type="select" onDragStart={handleDragStart}>Select Dropdown</div>
        <div className="component" draggable="true" data-type="radio" onDragStart={handleDragStart}>Radio Buttons</div>
        <div className="component" draggable="true" data-type="checkbox" onDragStart={handleDragStart}>Checkbox Group</div>
        <div className="component" draggable="true" data-type="textarea" onDragStart={handleDragStart}>Textarea</div>

      </div>
      <div className="canvas" id="canvas">
        {components.map((component) => (
          <div
            key={component.id}
            className="draggable"
            style={{ position: 'absolute', left: component.x, top: component.y }}
          >
            <input
              type="text"
              value={component.label}
              onChange={(e) => updateLabel(component.id, e.target.value)}
              style={{ display: 'block', marginBottom: '5px', width: '50%' }}
            />
            {renderComponent(component)}
          </div>
        ))}
      </div>
      <button id="saveBtn">Save</button>
    </div>
  );
};

export default Canvas;
