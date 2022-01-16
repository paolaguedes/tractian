import {Row, Image} from 'antd';

export function Icon() {
  return(
    <Row style={{alignItems: 'center', margin: ' 30px 10px' }}>
      <Image 
      preview={false}
      src="https://imgix.tractian.com/images/Logo-Tractian.svg?auto=format&fit=max&w=540"
      />
    </Row>
  )
}