
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const QrCode = ({ value }) => {
  return (
    <div className="QrCodeWrapper">
      {value && <QRCode value={value} size={256} fgColor="#000000" bgColor="#ffffff" />}
    </div>
  );
};

QrCode.propTypes = {
  value: PropTypes.string.isRequired,
};

export default QrCode;
