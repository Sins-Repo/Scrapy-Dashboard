import scrapy


class DellspiderSpider(scrapy.Spider):
    name = 'dellspider'
    allowed_domains = ['https://www.pcmag.com/categories/laptops/brands/dell']
    start_urls = ['http://https://www.pcmag.com/categories/laptops/brands/dell/']

    custom_settings={'FEED_URI': "dell.csv",
                     'FEED_FORMAT': 'csv'}

    def parse(self, response):
        print("Procesing:"+response.url)
        
        '''2 ways to extract data'''
        #Extract data using css selectors
        item_name=response.css('.text-base.md:text-xl.font-brand.font-bold::text').extract()
        price=response.css('.text-sm.md:text-base.shop-now.no-underline.text-gray-darkest.hover:text-gray-darkest.font-semibold.flex.items-center.flex-wrap.group::text').extract()
        score=response.css(".ml-1.mr-3::text").extract()
        review=response.xpath(".line-clamp-2.text-gray-darker::text").extract()

        #zip to a row
        rows=zip(item_name,price,score,review)

        #Making extracted data row wise
        for data in rows:
            #create a dictionary to store the scraped info
            scraped_info = {
                #key:value
                'page':response.url,
                'item_name' : data[0], #item[0] means product in the list and so on, index tells what value to assign
                'price' : data[1],
                'score' : data[2],
                'review' : data[3],
            }

            #yield or give the scraped info to scrapy
            yield scraped_res
            
            
            next_page_path = '.page-link + a::attr(href)'
            next_page = response.css(next_page_path).extract_first()
            if next_page:
                yield scrapy.Request(
                response.urljoin(next_page),
                callback=self.parse)
