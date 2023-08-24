import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader';
import '../style/style.css';
import ErrorComponent from './ErrorComponent';
import { server } from '..'
import CoinCard from './CoinCard';
import { Container, HStack,  Button, RadioGroup, Radio } from '@chakra-ui/react';
const Coin = () => {

  const [getcoin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1);
  const [currency,setCurrency] =useState('inr');

  const currencySymbol = currency==='inr'?'₹':currency==='eur'?'€':"$";

  const changePage = (page) =>{
    setPage(page);
    setLoading(true);
  }
  const btns = new Array(10).fill(1)

  useEffect(() => {

    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoin(data);
        
        setLoading(false)
      } catch (error) {
        setError(true);
        setLoading(false); 
      }
    };
    fetchCoins();
  }, [currency,page]);
  if (error) return <ErrorComponent message={'Error While Featch'} />

  return (
    <>
      <Container maxW={"container.xl"} className='name'>

        {loading ? (
          <Loader />
        ) : (

          <>

          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value={'inr'} >₹ INR</Radio>
              <Radio value={'usd'} >$ USD</Radio>
              <Radio value={'eur'} >€ EUR</Radio>
              
            </HStack>
          </RadioGroup>
            <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
              {
                getcoin.map(i => (
                  <CoinCard
                  id= {i.id}
                   key={i.id} 
                   name={i.name}
                   price={i.current_price}
                    img={i.image} 
                    rank={i.trust_score_rank}
                    symbol={i.symbol}
                     url={i.url}
                     currencySymbol={currencySymbol} />
                ))
              }

            </HStack>
            <HStack w={'full'} overflow={'auto'} p={'8'}>
              {
                btns.map((item,index)=>(
                  <Button key={index} justifyContent={'space-evenly'} bg={'blackAlpha.900'} color={'white'} onClick={()=>changePage(index+1)}>{index+1}</Button>
                ))
              }
            </HStack>


          </>
        )}
      </Container>
    </>
  )
}


export default Coin;
