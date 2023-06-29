import React, {useState}from 'react'
import { Modal } from 'react-native'
import { ContainerGeral, Text } from './styled'

export default function NewScreen() {
  console.log('jkasj')
  const [visebleModal, setVisibleModal]= useState(false)
  return (
    <ContainerGeral>

      <Modal
      visible={visebleModal}
      transparent={true}
      onRequestClose={()=> setVisibleModal(false)}
      >
        <Text>Teste</Text>
      </Modal>
    </ContainerGeral>
);
}