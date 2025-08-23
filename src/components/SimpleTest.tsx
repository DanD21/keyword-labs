'use client';

export function SimpleTest() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundColor: '#ff0000',
        zIndex: -1
      }}
    >
      <div className="absolute top-10 left-10 text-white text-2xl z-50 pointer-events-auto">
        TEST BACKGROUND VISIBLE
      </div>
    </div>
  );
}
