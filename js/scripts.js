function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")
  
    imageInput.addEventListener("change", function(){
      const reader = new FileReader()
  
      reader.addEventListener("load", ()=>{
        const uploadImage = reader.result
  
        changeMemePicture(uploadImage)
        
        // document.querySelector("#display-image").style
        // .backgroundImage = `url(${uploadImage})`
  
      })
  
      reader.readAsDataURL(this.files[0])
  
    })
  
  }
  
  async function mapImageList(){
    const memesObject = [
      {
        "name": "KAT 1",
        "path": "https://lh3.googleusercontent.com/Sb8M1Ha4wXZ1UfKyB9CS0-HB33exhksa9rtchsCe4aAbji4DMs0hFaSMNxp7qzkoUbYmSpmVzmrsu2sSuemIw9f_arf698GD7AYrv6lxtFOC-frr2J8ifBIxcr4Bn57ez1ZgH2xL9xbSNWCPgp2A_Ilqwfun3fw5J8VB9BYILeijhtRy35xFFzJ-juQldHtdyiZ9b8IZRx_JCVXOOnMS3nmLVAYf4XFKGYdvB2YstdFz0eH4PAQJ1ddDek0QqAcW7NxOetPUFcd9KrWTcAoGZAQPsJzASKh6UEuJHIeVLgKW5DTSZUPStg26StcIupef9NGCbAjJtslXsfkJ6B1amt6UmNiaVyfBUS_Hz29CjUFgvTpuwfKJXDKcfU5gqHxlIDe6FwlHfcrek59k8qTp7U3xTngsiD4ObjKplbdZWp8I2h9tCAXTYtmLsxXFaP-MwPHRRN1gUOk05txizsUrumHK93jeeRbjNI4WeJnFwh_T20FB4-IMS6lS05Y29W9Gwd4EB4LbmotUYI8FOudju7_SJadChq8VA03z59DPkbB-RqO3f9yLEt3qnd5O4AvjXz6087jPoPfIvlMS0Oq-v8_gvpoK8d4Y8RZmnoSr1l2hIrMW39bgaiBjx4D-bcLT0ScSgKGjgtfejsStDUOrK0WsxdkBwcd32UKc-KNLminxH6B9eq8w5buh33cFxJ5pc9IvHdMo8EnhbFpJBoBpesmT47p5DAkpuL3sx_NydllmRRiZpmfdnM_VCWLdpolPvVtygKTJJJzmstc7IQaLa_4z-TmRJnqlgv17iHLA2wQlgzjwTi5BVumCzJz4WnoYwJmJjE3v5_1PQaW2yD_nsLbeAJKnKI4g1Abb3BftGektGrsgkKjXFe2YqS9WHcmXpMKvKVA1sT0keFk8xPM3qrky0D3YcykfTaYlQymf3seYrG1yTnGcHuvB4NAglQ0ilgUQR13LbKykF2pQdnQDkQ=w157-h132-no?authuser=1"
      },
      {
        "name": "KAT 2",
        "path": "https://lh3.googleusercontent.com/AHX-3SCWI51wDTJWfIVxhLiMZtcuL-ONdlLJhK0-IeiJ7Zet957mhlna71zDHrlxEmAHxEGB9609y4sz9Ss3kXNLBNFucHnHSgpE36IcSObq8swzysdP5nzZchqKnmBvYodkvvXNV__TbbOupuGss1PgerjT5tn4QTBzAWtbMKTJtTHOQgTQCbUs-D7l6EH7cXDTSduNxkFk81qtuEFFdKlwNnVS3t9vVJS5i6OhYdDUXqTgJODTx877uf7UHSyLu0zBh_4A0dcMmmtbFumRAGiHxR2CklLFbfJZCu5iVOpUWuZfCchIUEWfa5sQaLfAbb18EDCBzmFAS3-RP_j_cxLM6DyioeKMtlVCvJM0-qaBl6-O-eEI3DW2pjRcUZ7dkeohzr3po7_h4FALKqzDXBFlS2uCoqDn_zIQFvS1aRap4Yjbtu5agB2cYAn4EeHqx_pMN-reqFUmVPHFsHzx3UKG_y4g5AZflTDX6HUfDs1c5vjt_7lcfVMeVQ3Y77atWhfwqd0w4polkpIU9VwTeQ1WTEcuMMtLbqBbrvDYsfs6U7KIuNPHJZ8HFCdpRI6e0po4PqFnThPlSUTwhtTWPhkg1AAtRkWcLxi6QMNeV-suoGPKmXlEPzCFCNHTu2xciT6RRb5ezzm_3gscrv13ofHXOCJQm3_KCkDcl0Rbg05IEpPMAHqtiEhg2mZpBLoi5vTRRzRE236UAqnD5IZzVRuN0iDkoghP1vgGbaXY1MuH2z5bhs1Q_7KffFhk_epc5H9RRn_l9lRNkKMIfFqNw7R-V6r3vaCE3Li_jl8Q50RRCcLGWaJ_sxyL5Uup8LJE1OPVDDBbZBzx8Gy2uem-ERgyalNMQKJt09Hlm9qb2SUNMkNGfkkRd-bQgHi8Pra5xrjmoVvs4fKuTs4cNqhg0UBnc_ikSx4B7w08jqc_T4AGLdJtFzaGbwGCISB21hLSckeZpvW1iUFY8zrjjqpVKg=w685-h617-no?authuser=1"
      },
      {
        "name": "CHLOE MEME",
        "path": "https://midias.correiobraziliense.com.br/_midias/jpg/2022/07/18/766x527/1_meme_chloe-26068285.jpg"
      },
      {
        "name": "KAT 3",
        "path": "https://lh3.googleusercontent.com/JhtBV_4FMXP8FYJdMVQcUuetx-x1SMgqLosVvY3pSEcX2CSdeC0zOiAo_IHmVrf9Jw4YGz6yICSDO2YPcxktn8OA5Z6yYo2ZZZSRrc1pYBi0lW2L1SOQUd8DmlmdS1VtBR05r0_jqMYOASAXe5Qm7TUHynSvEOi-ifwzvpcAJUFEWn-HWDP0051FtXiXc27JODYayxDVj0d8ZbYkpIn3RHze21h7r8j-zTK249aAvRlWvzLLjogH0cTRBHpUztxHZeTfXT4wP8uQmRXW1eJisxJJivWGIHOnDuqyxZhnJ2mzxT-08bgS_Vzw4GGbzKCWv2dXaqL40vwZE4IsAwHMKjanU7MeQqfzaGb9LsQUUg2EiAM3H-lFClZGMhRFwl1dK9w87IYx8WOMtaIiyvPqZ3SRWo_o0YNasUT5ypmkV6Ynjs3MJUh_xr_xGopf1C5n3r8rQoE78ihf4IJchEkNRjWST3UyVjMS5rIejz7q2I2mYy3ZcFPYrwOXOhtgRCVHSPoC55RDG2Wh5-GAqNePscLeFEOvfBayQnBEXwR0uznMvgzA-1HYzq6xJfPVB4sptziT8FtkhbVmrDrqrQ_cDf0HdqmcksbJY305pFVMOTiEVFTZ_taWhNf-VF5gEwA2H646migamU1_vf2oJ-IjgDw_ErSI2_NO6qpjo135JxcHmE0YXDVr-7vQ5-5Zh_6RVjmaGYjpNAZqzkQoyZVY53bdbQnCsZ3PK31YT8jL3cUjOef1Cik2OV7doOad_7jLETWRdLkKLFKqiLWmv7Ua33HfmiddKErFbMTUqoZFrxSWTEnlDFK0oiO9zea4WkmDeMCi9EbsO1aj-9Iy3kGHBARwMnzcOOQBy1uTWmclKGTBoHmj1Rrb8J2mat1yyvXtsze5xPP9QBohBf_EKE0BQ7Gvz7NL3LKohJOsy6FZJsKmzft-ztWGVFtavn2F2lC_axFp79jjR8N2epO4OKQmfw=w982-h617-no?authuser=1"
      },
      {
        "name": "KAT 4",
        "path": "https://lh3.googleusercontent.com/c46fWqfpMkQfjqSs2xSn25_7wTInyQMVYaCXvTW0yDtrcrvuBLjWiAaarzWLDUrflLrwLR57upp-_Kc1Hn8Xr75cCFJlZDaG4OZWyOLQfbjH2VKcsuV3qdN1xJTcz4VwCUT6zVGZZAOjg3w1mhq2pM1bK5ZDAulVFXRpYy8JzQBZZEkGf8P7GPw_Cr_boa1oiJgFqgjsGXe9Ow90UE8oqu60g-XDo5Zdj9zMXSJCj7deRiL8PNnrEiuppU4JdvlQA5-AsnXiGjx7Ix04q2wd7ZoIkqgHsWQAry_6PQNSBKnEPE_iN1YCL16Um2sR7NVJbWjqxTx-W9zR2VrryezAiS7nwPg_e4Wd8XNXEW-Nn8fMcr2WQ2XR1KBDkgwkx38XjgOnTctHkZcYbsW2J8FI30974_SfSYc7Qg1TPIqwb_5XkwGQ_aJuKQtXQyPG3yh2AenYVXGgaoXqGpKtVBULqz8VaVXIRpTzLtsGGasGJxTPVfwIsUXSVec07NRRnO3On80ci0VLq4UKtWIipCI2FWvamSntVO9qdWeailPZ5v3LMMsp-oVanpEHdTtlXBaKePCG12U7aQOfCo8aZUJVpxSdgs7SGR0412sDabecOxb2tv-wL92JHtxPw2U_xsypj8_BtXPVGHEZZLs_ujUkV3LJHW9wfJovfmscEa47RMbdde0wTrAYoTT5-Y0XAOse_sJeHWkd1yB5pivB0rjsj1A5iBgMEkwc5fHhFmein7yFkcrL0N8UCcRORRuGLxpI3dJTX1V3wOnU-MnbFYwu7pCU-59g3EWNJtfzULZwmIGtdU3M5ZkC25adTslApYFQPfM9s3JEnO3s7tqjP_sdN6BVTOq7D1whIO96zcbCl5RgXDX46buZCiNPSwbdtPlDAni-46KnHHnMc5gR2akfLurYFMIYgqWp2n1xcVaRj7TbyAr7hr__iShV9U1Zje2U9ozH4zDuihEE8_bgC2LRbw=w673-h617-no?authuser=1"
      },
      {
        "name": "KAT 5",
        "path": "https://lh3.googleusercontent.com/tDW005tvzroW8NM122z7j4q4j0nQki5Mn8G4bbAdUbisDBmQi9EFtQi4lXI3NHVCYRHiEu2DYcfH1pQ4WGluBZzQp2EVKEGN5vWDQnT_kWuF84Upe7BIpszv-K3gTnJvSABdcejWwihhskjROPWejwVli2EyD5KbuYIzZOUtlilZcvtQOhD-FX1ZPgvvIDIxdH6FuvmPA0RWT5DAwc-4rOSHNQ2E9erJXAiXfEMW8mC8p5C4LYud0esPdRzMElms0_YYDgJ98Hz8v3gW-aoigAyd3bIBXAxoaS0Sm26-FwME23pCDRnX4fX2OWHpMoNChgIjyCsOImP0m6SxqNTfwlFDhit3AfkA1Ln8NjUz44ntQqDDYhd84snRWI5vAAI18Y4jDmEqC6izILNb3bdBBVJkzbslFB0E5PE1crxtq8SLDGb-U_2mvQabBTQzcNhBCr1LV99G8wuy2fTrC448OwWkXUDvTFaLbBi6IcmGMitZzzJvT1CRYEo_t3beWaG7Js_cpHlK2oBSQyAjjvD0n2cUoJedko6aoVpJYpxS803MpOrxi6kTPaQuLYXeeCGUbwfymgwO38dKpqh0qUXPVLAYatyoMy10uX7sd5X0ztRve_Vk2zjmMucLy-VWdE-PfH_GMVcx_pN-KeX6XCXQS3NNzqggq8nAH7TMWAixHo5CF-XVBMjRrvf-BKFtmGYmhN7wEN8YAApKrL71lUPKYp9ASXyLdMaOQRDn4WN-rrty8UZ8-qVKz5j2ofuJO7aZg_Rh5cqT4jaH6N3cjGxlk5S-sfLnkhGfGwP4l8ogM_bLy2Swp4kU6ku53i6Hc8s5A_rOQi2xUY_Vt7JUxqsKy7H0ZraI48Tq_gnIhMIwWXlQCvxlnKSaDaL3k_SHxZMjiIW0hqrVWiI3tfKzRsaAXqkRKDh7PbN0JQ5TdNm8cZGyPe0GFqjoRkS53UqXVEbNaBq_UO5G_J5FgbvQ592OEg=s400-no?authuser=1"
      },
      {
        "name": "KAT 6",
        "path": "https://lh3.googleusercontent.com/SEeozUUCLqWSTv_N-YYWxdKQU4vAhQF27FXItNq9cHvN-7xND1UAisOyWG_Bcf0LKI4nHa9JMQNPOXQDEo6kOlLor60wALBG97pqyqiW9FC7vVXXXm9PXb4Oo-iOF1wg3FOVLWxYbCg-jw-E1YqTu3GyixaO_NnAgtxT6-mTPQ-FYtv66o1hTEdCFJ4Ef4ZbaASrB7E_8IMH0CD2Dk7ODJr8BZHKQBymjs_S3z8l0DPsEm8ptjj07CxivRdxffp6PnVqrZHHFsL44uFr2UidPmKqJJp7J0zuY4FjKSiWlkvfVTncLEo4hEXsg4DVmtM5ZVaC14RAInFnMM8JL3MPIoYyXR4h4uFEqx0fpv1yQNdQRCyIxi8UDmiuOliSFGzAs32OKCs5KIjwa5mOGnAEXZNoOSf_h_Sb1eUPyR7WfIE-SVicKfgwmZyzqPiNRVTcdLMfBaFRMFAP3Rn3BF6iU6-l08dnIIPImWMkbLFmS04sK5d5Dzpy-UF0ah06vGHJLJu6BVqRXzEKuFlQdUS4hHbYRs9n6dWEdwlUkyp83S36bhEy_Nd7fEDZ3K9danOhpIgBCo9BoibzATgiUlpAl0Rx1wwMoqvlMW78_FTYggiXQHAmyzAKgEeFR8Dwqs9Uyp4BAptkkMNBKWPg2_C14dXOh7SSzR2Hsf7PdLEe4DHwAyVYBZ9YWMI1lig_OmzpXxnUXeONiJ-69tyUcKebl7yrla_0aqHzSeqK-2IyCAMA7RBoxX8CupPess0nSM0FPo_UyQjKXzdoUTH8WvO13Xyc7y_Ii0X996y8jw2R1O0B-n_debKatzQgHYHPhz7srosOiCYaTGhZCIEb58kT--25tezq5KCHScaVfB8Y2Hf81DtnzArKloOodAjjkmVYZTxEL41QNqvwO6prgkO-YpS8n4kaXFvdTOEL1Zn6MCl_qQ6GJBF9F6a2oDHPp7PtE_24X5FyU_EQDt08NDaxLQ=w679-h617-no?authuser=1"
      },
      {
        "name": "KAT 7",
        "path": "https://lh3.googleusercontent.com/dvH1uYGQwdw6sdhAMO-wszotjQqEd6dr8UOAlZc4cp7hLD898alb0YXNlEzEZq9KRIIFR3bsvxE2Is5sgLDt0tiQT5CwfbVF0be3jveUVfH8SoW_YJsZqylZqvA7jvWW1k_kR1LanIr1j21An7LhZeQzJc-oCSP4Y_mv65fnYc4CCXwGz3vPTvkY0qM89RakLY-hFlBf8GfBlgXaZYUvRNNHL4q3Flsrbq6mMcTAuth2sc2aWo4wBW1PVgSi6cDCJpSZLgLqnzQ0cORfTGEPuRCR-spgfSQrNLmf0EfEKciJKPZVLShXwOT5XOTqCoZFbOnxGM-f3RU7mgZQGYXW3fp0UmfBol_ZR5Z8zoRoyCgAs3k-Y44q9zxlK9NKvj7nqevhEZfciieBoLee4Pq0nhrZth6GB36qW_Gn11h215DqnPdChPExNvrukSp2ZFDqmHLGf-OZW-RDyET20Z6gRmszr3BUMlMkp3cAXLDylXHnTcu-cH18oTx8fttIQqDCol4UBBHbl92L4wDrLI9DmZFCOtQKu7VqlRT54-MDtBTARzt68YBadzJnlaOc3ZnNx1FlnuQVGVTneRIw_SC3cQYT56yxp-LcHnmCEdvt9QyRGiu3H2l8AkEmS27IjepNyNvu4nTu6enYHamZlPWOEgWZKImEJYGtY4cNvuUYeTrS3Z5pZaVDvaw87uz3JhGuoBtdSUlvOC8sbFiqaHeXgnsqYlrQ7HcVNUmfIZODtdUK-hHb3SfTsh2TzpiRYukEHztjjnPjJubtDVEGVnUEmk0non4B3ryrXXJr0evc_9zxLSxrZfm6jH8OYntGR4A82LSyDGEB1rCzkLfkoXVFZrCz65Zdxn33uwv-f1SAd38SmOfD_PZFetS1DdsckfKBIFJGcXmTauLxA2kbQXlPGslLBgacZ3ICabikdwYum-M4zmT9DYx8Q3Hk71g5q6Q4IIqEIu7jwVuJPXtiA444HQ=w556-h551-no?authuser=1"
      },
      {
        "name": "KAT 8",
        "path": "https://lh3.googleusercontent.com/xY_r6ZdTo8qoSdyOJkYCwO97sQ1_rbh4QzPO68ualibtUOnle-3Sj6_Kn6fpjVE7PQ35abErOqi4GiSH3MZbe2Z9Y1gVQVe1phoyyPcToRe8Z0MMzmiQ8ufQf69Ain6ClHYb_CumrEZS4itJKsZMLqHKA2cZ1r65VZS-hB2dlKA4Xl3LnfEV-Ttv28wTErWoTh--Ck2OilXDbvTWgv0B3sY1c_g7y-AeQkj0gPIDrcaf_b5KWi43s_-zq-CDgMdM6XuCEAPAeSP9kKQKJSXjJLXWP_4RLAePr4WjcPUhV0IFlYT2FSgXl05p5ldieKqKom4Q72hMO8olchvm049DsudtrmotTnC-MHt3QXovXNH8DxcloTxEqi9NuVupY1lX_L2B5-OhdOvPvE0uKDfL6g7BVJWx7nU4vqeS1_YwV_SOW1mv1vXw2jXL5WKMCsT-R02IawWKXSyFBTnduOAeWOeTMISC0g2_U5BGknovhKO9yisgTiYosjp6klod-HAK6EQYoARD28K_ek06XgGmUtftYXgLW_5yOPHM2zL4fA3luT0RhYTw1NSTmfYffYnyASkAv3_tE3DB24JfaQ6VQAc1x7WwuWPyWtReXbHGZgRfZ0izNv30f-n4AZZGT_41SbL4uLejFyduAnQw0HzScvR7pkp1GvkRWwRFCazGe1Ceks_57fNwc9j__XkSWCJuL20thCrjswcW0Ms2cxuRY0gt8Xl3ROouCBK5v05eve5g0-Nok0ZTgHc-ivQbYz7lcHeWXfu6utngoj-T1R_x5Bl0lnBSkEEvB0RdtWMJUvaEdOxeBQEGQ0MhLYAp3L9Um-aIySQdeBpc41Bgf1jyJD4RQuOSOk18E8RtEoumiTcUr4RIfYjsXf1u-4jplMS7HQfnZdmaK7mLJpnn6zcUVHvAIdPB693ntiglzo2RVcf4b2amceX0QYmFlmPDjqBc6-raqBSuYfhjxUINo6mwhQ=w236-h210-no?authuser=1"
      },
      {
        "name": "KAT 9",
        "path": "../pictures/kat9.jpg"
      },
      {
        "name": "KAT 10",
        "path": "../pictures/kat10.jpg"
      },
      {
        "name": "KAT 11",
        "path": "../pictures/kat11.jpg"
      },
      {
        "name": "KAT 12",
        "path": "../pictures/kat12.jpg"
      },
      {
        "name": "KAT 13",
        "path": "../pictures/kat13.jpg"
      },
      {
        "name": "KAT 14",
        "path": "../pictures/kat14.jpg"
      },
      {
        "name": "KAT 15",
        "path": "../pictures/kat15.jpg"
      },
      {
        "name": "KAT 16",
        "path": "../pictures/kat16.jpg"
      },
      {
        "name": "KAT 17",
        "path": "../pictures/kat17.jpg"
      },
      {
        "name": "KAT 18",
        "path": "../pictures/kat18.jpg"
      },
      {
        "name": "KAT 19",
        "path": "../pictures/kat19.jpg"
      },
      {
        "name": "KAT 20",
        "path": "../pictures/kat20.jpg"
      },
      {
        "name": "KAT 21",
        "path": "../pictures/kat21.jpg"
      },
      {
        "name": "KAT 22",
        "path": "../pictures/kat22.jpg"
      },
  
    ]
  
    return memesObject
  
  }
  
  async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-list")
  
    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
  }
  
  
  async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
  }
  
  
  async function main(){
    const memesImageList = await mapImageList()
    
    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[1].path)
    
  }
  
  main()
