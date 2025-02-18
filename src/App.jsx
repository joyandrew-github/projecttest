import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 
import './App.css';

function App() {
  const [qrData, setQrData] = useState('');  
  const [size, setSize] = useState(150);  
  const downloadQRCode = () => {
    const canvas = document.getElementById('qrCode'); 
    const pngUrl = canvas
      .toDataURL("image/png")                       
      .replace("image/png", "image/octet-stream");     
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";           
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="jumbotron">
        <h1>QR Code Generator</h1>
        {}
        {qrData && (
          <QRCodeCanvas
            id="qrCode"
            value={qrData}
            size={parseInt(size)} 
            bgColor="#FFFFFF"
            fgColor="#000000"
            includeMargin={true}
            className="qr-image"
          />
        )}

        {}
        <div className="form-group">
          <label htmlFor="dataInput" className="input-label">Data for QR code:</label>
          <input
            type="text"
            id="dataInput"
            className="input-field"
            placeholder="Enter data"
            onChange={(e) => setQrData(e.target.value)}  
          />
        </div>

        <div className="form-group">
          <label htmlFor="sizeInput" className="input-label">Image size (e.g., 150):</label>
          <input
            type="number"
            id="sizeInput"
            className="input-field"
            placeholder="Enter image size"
            value={size}
            onChange={(e) => setSize(e.target.value)} 
          />
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button className="btn" onClick={() => setQrData(qrData)}>Generate QR code</button>
          <button className="btn btn-download" onClick={downloadQRCode}>Download QR code</button>
        </div>
      </div>
    </>
  );
}

export default App;
