import scrapy


class ApplespiderSpider(scrapy.Spider):
    name = 'applespider'
    allowed_domains = ['pcmag.com']
    start_urls = ['http://www.pcmag.com/categories/laptops/brands/apple/'] 
    base = 'http://www.pcmag.com/categories/laptops/brands/apple'
    for i in range(2,5):
        start_urls.append(base+'?page='+str(i))

    custom_settings={'FEED_URI': "apple.csv",
                     'FEED_FORMAT': 'csv'}

    def parse(self, response):
        print("Procesing: " + response.url)

        '''2 ways to extract data'''
        #Extract data using css selectors

        item_name=response.css('.text-base.font-brand.font-bold>a::attr(data-item)').extract()
        score=response.css('.ml-1.mr-3::text').extract()
        review=response.css('.line-clamp-2::text').extract()

        rows=zip(item_name,score,review)

        #Making extracted data row wise
        for data in rows:
            #create a dictionary to store the scraped info
            scraped_res = {
                #key:value
                'page':response.url,
                'item_name' : data[0], #item[0] means product in the list and so on, index tells what value to assign
                'score' : data[1],
                'review' : data[2],
            }

            #yield or give the scraped info to scrapy
            yield scraped_res
